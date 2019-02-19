# Miniscule URL

A url shortner built using React and Rails.

## Backend Installation Instructions

Note: These instructions assume you have recent versions of both ruby and rails currently installed.

First, from the root directory of this repository, cd into the backend directory.

```
cd miniscule_url_server
```

Then install dependencies using bundler.

```
bin/bundle install
```

Then run rails db:migrate to create the database and match it's schema with what the server expects. 
```
bin/rails db:create
bin/rails db:migrate
```

Note: You will want to make sure you have an instance of postgres running for the previous step. 

Next you will want to generate a secret key and copy it to your clipboard.
```
bin/rails secret
```
Then create a new evironment variable called DEVISE_JWT_SECRET_KEY, and make its value the secret key you copied previously.

```
export DEVISE_JWT_SECRET_KEY='your secret key here'
```

Finally, to start the backend, run rails s. 
```
bin/rails s -p 3001
```

## Frontend Installation Instructions

Note: These instructions assume you have recent versions of both node and npm currently installed.

First, from the root directory of this repository, cd into the frontend directory.

```
cd miniscule_url_client
```

Then, to install dependencies, make sure you have yarn install and run yarn.

```
yarn
```

Note: if you do not currently have yarn installed, you can install it with npm using the following command.

```
npm install -g yarn
```

Finally, to start the frontend, run yarn start. 
```
yarn start
```

