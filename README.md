Pretty straight-forward HTML generation via native JavaScript tagged literals.

```javascript
  const {HTML} = require("@sembiance/html");
  
  // Create a new HTML object, pass in the base directory path where your templates reside
  const html = new HTML(baseDirPath)
  
  // Prepare data and options for rendering
  const pageData = { title : "Hello, World!" };
  const renderOptions =
  {
    preserveWhitespace : false, // Preserve whitespace. Default: false
            skipMinify : false, // Skip minification of HTML. Default: false
  };
    
  // Render the HTML
  // anyFilename should exist at baseDirPath/anyFilename.js
  // Both pageData and renderOptions are OPTIONAL
  console.log(html.render("anyFilename", pageData, renderOptions));
```

The 'baseDirPath/anyFilename.js' file is just a node module with content:
```javascript
module.exports = function _anyFilename(data, {html, include})
{
  return html`
${include("common/prefix")}
  <h1>Welcome to your web page!</h1>
${include("common/suffix", {goodbyeMessage : "Goodbye!"}}`;
};
```

The 'baseDirPath/common/prefix.js' file:

```javascript
module.exports = function _prefix(data, {html})
{
  return html`
<html>
  <head>
    <title>${data.title}</title>
  </head>
  <body>`;
};
```

The 'baseDirPath/common/suffix.js' file:
```javascript
module.exports = function _suffix(data, {html}) { return html`<h2>${data.goodbyeMessage}</h2></body></html>`; };
```


See test/test.js how it includes test/main.js and it goes from there.
