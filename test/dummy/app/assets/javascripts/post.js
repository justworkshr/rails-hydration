// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

Hydration.onReady(function(data) {
  var post = data.post_data;

  var meta = '';
  meta += '- Author: ' + post.meta.author + '<br/>';
  meta += '- Date: ' + post.meta.date + '<br/>';
  meta += '- Published: ' + post.meta.published;

  document.getElementById('post_title').innerHTML = post.title;
  document.getElementById('post_meta').innerHTML = meta;
});
