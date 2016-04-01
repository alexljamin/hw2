// main.js
var React = require('react');
var ReactDOM = require('react-dom');
var ReactForms = require('react-forms')
var Schema = ReactForms.schema.Schema
var Property = ReactForms.schema.Property
var Form = ReactForms.Form

// ReactDOM.render(
//   <div>Random words</div>,
//   document.getElementById('container')
// );
var schema = (
  <Schema>
    <Property name="randomWords" />
    <Property name="inputWords" />
    <Property name="statistics" /> //type="number"
  </Schema>
)
React.renderComponent(
  <Form schema={schema} />,
  document.getElementById('container'))