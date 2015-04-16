Rails.application.routes.draw do

  get 'post' => 'post#show', as: 'post'

end
