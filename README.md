# Wingman Client Analyzer

To start the app, there are 3 distinct ways:

1. Open the app deployed on heroku online `heroku open`

2. Open the app deployed on heroku locally `heroku local web`

3. Open the app locally `node app.js` or `npm start`

## Source
[arishuynhvan/wingman-client-analyzer](https://github.com/arishuynhvan/wingman-client-analyzer)

## Technical

1. Bundle all js files with Webpack. Require function is from CommonJS

2. Add new js files into the webpack.config.js entry, so all js files will be placed in the bundle.js file => single js script in index.html

3. [JSON Editor by josdejong](https://github.com/josdejong/jsoneditor)

4. File retrieval is empowered by FileSystem API

5. A lot of errors in webpack build haven't been resolved, but basically bundle.js still contains the right code, so not bothering now

6. May eventually need to modify jsoneditor for displaying multiple json objects

## Developer's Stories

1. The application will retrieve a simple log file of wingman client

2. There are 2 views: Senquential, Split

3. The objects can be filtered by sessions

3. Key & Value pairs are displayed neatly (preferably in a table)

## Design
### Initial
#### Split View
[Split View](images/splitView.PNG)
#### Sequential View
[Sequential View](images/sequentialView.PNG)
#### Filter
[Filter Dialog](images/sessionsFilter.PNG)

## Shortcut keys

### Tree Editor

Key                     | Description
----------------------- | ------------------------------------------------
Alt+Arrows              | Move the caret up/down/left/right between fields
Ctrl+Shift+Arrow Up/Down| Select multiple fields
Shift+Alt+Arrows        | Move current field or selected fields up/down/left/right
Ctrl+D                  | Duplicate field
Ctrl+Del                | Remove field
Ctrl+Enter              | Open link when on a field containing an url
Ctrl+Ins                | Insert a new field with type auto
Ctrl+Shift+Ins          | Append a new field with type auto
Ctrl+E                  | Expand or collapse field
Alt+End                 | Move the caret to the last field
Ctrl+F                  | Find
F3, Ctrl+G              | Find next
Shift+F3, Ctrl+Shift+G  | Find previous
Alt+Home                | Move the caret to the first field
Ctrl+M                  | Show actions menu
Ctrl+Z                  | Undo last action
Ctrl+Shift+Z            | Redo
