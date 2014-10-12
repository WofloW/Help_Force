Help Force
==============

One day developed in salesforce hackathon 2014

##Team Members:

Hao Chen

Wei Fang

Xi Han

Tim Siwula

WanZhang Sheng




##Backend:

Dev

```
bundle
rake db:create
foreman start
```
* Based on Ruby 2.1.2 and Ruby on Rails 4.1.6
* Deployed on Heroku
* Database is Postgres

##Frontend:
* Ionic(an open source front-end framework for developing hybrid mobile apps with HTML5)
* HTML/CSS/AngularJS/Condova

##Communication: Json
## API list

    Verb   URI Pattern                         Controller#Action
    GET    /categories/:id/tasks(.:format)     categories#tasks
    GET    /categories(.:format)               categories#index
    POST   /categories(.:format)               categories#create
    GET    /categories/new(.:format)           categories#new
    GET    /categories/:id/edit(.:format)      categories#edit
    GET    /categories/:id(.:format)           categories#show
    PATCH  /categories/:id(.:format)           categories#update
    PUT    /categories/:id(.:format)           categories#update
    DELETE /categories/:id(.:format)           categories#destroy
    GET    /tasks/search/:keyword(.:format)    tasks#search
    GET    /tasks/category/:id(.:format)       tasks#category
    GET    /tasks(.:format)                    tasks#index
    POST   /tasks(.:format)                    tasks#create
    GET    /tasks/new(.:format)                tasks#new
    GET    /tasks/:id/edit(.:format)           tasks#edit
    GET    /tasks/:id(.:format)                tasks#show
    PATCH  /tasks/:id(.:format)                tasks#update
    PUT    /tasks/:id(.:format)                tasks#update
    DELETE /tasks/:id(.:format)                tasks#destroy
    GET    /users/:id/posted_tasks(.:format)   users#posted_tasks
    GET    /users/:id/received_tasks(.:format) users#received_tasks
    GET    /users(.:format)                    users#index
    POST   /users(.:format)                    users#create
    GET    /users/new(.:format)                users#new
    GET    /users/:id/edit(.:format)           users#edit
    GET    /users/:id(.:format)                users#show
    PATCH  /users/:id(.:format)                users#update
    PUT    /users/:id(.:format)                users#update
    DELETE /users/:id(.:format)                users#destroy
    GET    /                                   welcome#index
