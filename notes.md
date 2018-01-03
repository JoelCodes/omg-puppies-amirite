# Integrating React and Rails

## What The Hell Is A JWT?

A JWT is a Base64-encoded string with "Claims" that is hashed according to a certain algorithm and key.

## Rails

* Make a new Rails project
* Switch to API mode
* Make User model
* `gem 'knock'` in Gemfile
* `rails generate knock:install`
* In AppController, `include Knock::Authenticable`
* `rails generate knock:token_controller user`
* For any controller method that needs to be guarded, include `before_action :authenticate_user`

## Create React App

* `create-react-app`
* Set the `npm start` to run on port 3001
* Update the build task to export to the rails app `public` folder
* Import `react-router-dom` and watch it go.

```json
  "scripts": {
    "start": "PORT=3001 react-scripts start",
    "build": "react-scripts build && cp -a ./build/. ../server/public && rm -rf ./build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }
```

## Integrate Login

* Make A Login Route
* Request a Token and save it to LocalStorage
* When we start the app, we'll check LocalStorage for a token

## Integrate Authorization