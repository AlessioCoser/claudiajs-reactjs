var React = require('react')

var DOM = React.DOM

module.exports = React.createFactory(React.createClass({
  render: function () {
    return DOM.span(null, 'hello world')
  }
}))
