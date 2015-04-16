# Rails Hydration

Pass data from Ruby to Javascript without writing JS in your .erb view files.

### The Problem

When trying to pass data from Ruby to Javascript we end up doing something like:

```erb
<!-- app/views/posts/show.html.erb -->
<h1><%= @post_title %></h1>

<script>
  var postMeta = <%= @post_meta.to_json  %>
</script>
```

This works, but requires us to write our Javascript inline in .erb views (yuk). 

### Getting Started

Add the gem to your Gemfile:

```ruby
# Gemfile
source 'https://rubygems.org'

gem 'rails_hydration'
```

Add the javascript to application.js — above other JS files that you want to use the helper in:

```js
// app/assets/javascripts/application.js
//
//= require rails_hydration
//= require_tree .
```

In your views, pass Ruby data that you want to use in your Javascript via the `hydration` helper, giving it a unique key ("postMeta" in the example below):

```ruby
# app/controllers/posts_controller.rb
class PostsController < ApplicationController

  def show
    @post_title = "My Post Title"
    @post_meta = {
      author: 'Jason',
      date: Date.parse("2014-10-12"),
      published: true
    }
  end

end
```

```erb
<!-- app/views/posts/show.html.erb -->
<h1><%= @post_title %></h1>

<%= hydration('postMeta', @post_meta) %>
```

In your Javascript, use the `Hydration.onReady` function the same way you would use jQuery's `$(document).on('ready'). Your hydration data will be passed to your callback as the first argument:

```js
// app/assets/javascripts/posts.js

Hydration.onReady(function(data){
  console.log('Post meta:', data.postMeta);
  //  {
  //    author: 'Jason',
  //    date: '2014-10-12',
  //    published: true
  //  }
});
```

You can add as many hydration tags to the page as you'd like, provided they each have a unique key ("postMeta" in the example above). As for the value, feel free to pass in strings, booleans, arrays, hashes, ActiveRecord objects, etc. The helper calls `.to_json` internally.
