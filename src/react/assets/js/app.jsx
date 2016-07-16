var { Router, Route, IndexRoute, Link } = ReactRouter

const Editorial = React.createClass({
  render: function() {
    return (
        <div className="editorial__container">
          <h2 className="editorial__heading">Editorial Container</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam velit lectus, pretium pulvinar magna volutpat, consectetur sollicitudin nunc. Praesent ligula libero, commodo vel fringilla a, ultricies ac ante. Donec eu congue ligula. Curabitur molestie, tortor eget volutpat tristique,  velit leo pulvinar eros, nec molestie dolor odio eget nibh. Fusce facilisis nisl sit amet erat placerat, eget convallis justo interdum. Praesent sit amet arcu dapibus, eleifend mi quis, hendrerit diam. Praesent condimentum varius nunc, at tincidunt risus hendrerit in. Donec ut ligula      ligula.    Aliquam ultricies ut ligula non mattis. Quisque a mauris neque. Sed eu vulputate nisl. Suspendisse pulvinar et tellus in congue. Ut lacinia lorem justo, a viverra urna molestie vitae. Integer malesuada ante risus, rutrum vehicula turpis sagittis ultricies.</p>
        
            <p>Suspendisse aliquet elit tortor. Etiam libero est, cursus mollis molestie sit amet, hendrerit in arcu. Phasellus consequat, arcu at fermentum sollicitudin, eros metus convallis neque, in volutpat quam velit eget neque. Vivamus bibendum, urna in convallis imperdiet, quam leo ornare tortor, quis ullamcorper erat massa sed velit. Etiam congue sodales ornare. Aenean quis leo a mi venenatis lacinia. Sed blandit ultricies orci ac accumsan.</p>
        </div>
    )
  }
});

const Footer = React.createClass({
  render: function() {
    return (
        <ul className="footer__list">
            <li className="footer__item"><a href="#" className="footer__link">Home</a></li>
            <li className="footer__item"><a href="#" className="footer__link">About</a></li>
            <li className="footer__item"><a href="#" className="footer__link">Careers</a></li>
            <li className="footer__item"><a href="#" className="footer__link">Contact</a></li>      
        </ul>
    )
  }
});

const Hero = React.createClass({
  render: function() {
    return (
        <img src="http://placehold.it/1920x500" />
    );
  }
});

const ThreeUp = React.createClass({
  render: function() {
    return (
      <div id="three-up-container">
          <div className="three-up__item">
              <img src="http://placehold.it/400x400" className="three-up__image" />
          </div>      
          <div className="three-up__item">
              <img src="http://placehold.it/400x400" className="three-up__image" />
          </div>   
          <div className="three-up__item">
              <img src="http://placehold.it/400x400" className="three-up__image" />
          </div>   
      </div>
    )
  }
});

const Layout = React.createClass({
  render: function() {
    return (
      <div>
        <Hero />
        <Editorial />
        <ThreeUp />
        <Editorial />
        <Footer />
      </div>
    )
  }
});

ReactDOM.render(
  <Router>
    <Route path="/" component={Layout} />        
  </Router>,
  document.getElementById('app')
);
