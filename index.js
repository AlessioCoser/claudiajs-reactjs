var ApiBuilder = require('claudia-api-builder')
var React = require('react')
var ReactDOMServer = require('react-dom/server')
var helloWorld = require('./components/hello-world')

var api = new ApiBuilder()
var DOM = React.DOM

module.exports = api

api.get('/', function () {
  var response = ReactDOMServer.renderToStaticMarkup(DOM.body(null, helloWorld(null)))
  var statusCode = 200
  var contentType = 'text/html'

  return new api.ApiResponse(response, {'Content-Type': contentType}, statusCode)
})
