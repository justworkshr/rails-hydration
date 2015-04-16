class PostController < ApplicationController

  def show
    @post_title = "My Post Title"
    @post_meta = {
      author: 'Jason',
      date: Date.parse("2014-10-12"),
      published: true
    }
  end

end
