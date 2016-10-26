var ApiBuilder = require('claudia-api-builder')

var api = new ApiBuilder()

module.exports = api

api.get('/', function () {
  var response = 'hello world'
  var statusCode = 200
  var contentType = 'text/html'

  return new api.ApiResponse(response, {'Content-Type': contentType}, statusCode)
})
