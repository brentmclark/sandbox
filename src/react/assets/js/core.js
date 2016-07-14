var Hero = React.createClass({
  render: function() {
    return <img src="http://placehold.it/1920x500" />;
  }
});

var Editorial = React.createClass({
  render: function() {
    return <div>Editorial</div>;
  }
});

var ThreeUp = React.createClass({
  render: function() {
    return <div>Three Up</div>;
  }
});

var Footer = React.createClass({
  render: function() {
    return <div>Footer</div>;
  }
});

ReactDOM.render(
  <Hero />,
  document.getElementById('hero')
);

ReactDOM.render(
  <Editorial />,
  document.getElementsByClassName('editorial')
);

ReactDOM.render(
  <ThreeUp />,
  document.getElementById('three-up')
);

ReactDOM.render(
  <Footer />,
  document.getElementById('footer')
);
