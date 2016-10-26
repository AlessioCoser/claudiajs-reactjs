var ApiBuilder = require('claudia-api-builder')
var React = require('react')
var ReactDOMServer = require('react-dom/server');

var api = new ApiBuilder()
var DOM = React.DOM

var helloWorld = React.createFactory(React.createClass({
 render: function() {
   return DOM.span(null, "hello world");
 }
}));

module.exports = api

api.get('/', function () {
  var response = ReactDOMServer.renderToStaticMarkup(DOM.body(null, helloWorld(null)))
  var statusCode = 200
  var contentType = 'text/html'

  return new api.ApiResponse(response, {'Content-Type': contentType}, statusCode)
})
