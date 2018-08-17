# Order-React-ively

A simple order burger application that use React and Redux for state management and Firebase for database and hosting sites. Live demo [here](https://react-application-manasye.firebaseapp.com/)

## How to Install

`npm install`

It will install all dependency needed for this project.

`npm run start`

Simply start with this command and you can see your project in `localhost:3000` (by default).

## How to Build A Production

`npm run build`

This command will create a leaner version of the project ready to deploy.

## Routing Issue

Firebase come with a handy rewrite rules prepared for routing in react. If you want to rewrite rule in your localhost, put this command in your .htaccess on the public folder and run `npm run build` again.

`Options -MultiViews`

`RewriteEngine On`

`RewriteCond %{REQUEST_FILENAME} !-f`

`RewriteRule ^ index.html [QSA,L]`
