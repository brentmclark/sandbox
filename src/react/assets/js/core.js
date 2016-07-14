var Hello = React.createClass({
  render: function() {
    return <Nested name="world" />;
  }
});

var Nested = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});

ReactDOM.render(
  <Hello />,
  document.getElementById('container')
);
