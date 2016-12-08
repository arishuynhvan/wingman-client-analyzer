#Wingman Client Analyzer

To start the app, there are 3 distinct ways:

1. Open the app deployed on heroku online `heroku open`

2. Open the app deployed on heroku locally `heroku local web`

3. Open the app locally `node app.js` or `npm start`

##Source
[arishuynhvan/wingman-client-analyzer](https://github.com/arishuynhvan/wingman-client-analyzer)

##Technical

1. Bundle all js files with Webpack. Require function is from CommonJS

2. Add new js files into the webpack.config.js entry, so all js files will be placed in the bundle.js file => single js script in index.html

3. File retrieval is empowered by FileSystem API

4. A lot of errors in webpack build haven't been resolved, but basically bundle.js still contains the right code, so not bothering now

##Developer's Stories

1. The application will retrieve a simple log file of wingman client

2. There are 3 views: Senquential, Paired and Sessional

3. Key & Value pairs are displayed neatly (preferably in a table)