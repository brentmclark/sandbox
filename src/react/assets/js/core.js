var Hero = React.createClass({
  render: function() {
    return <img src="http://placehold.it/1920x500" />;
  }
});

var Editorial = React.createClass({
  render: function() {
    return <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam velit lectus, pretium pulvinar magna volutpat, consectetur sollicitudin nunc. Praesent ligula libero, commodo vel fringilla a, ultricies ac ante. Donec eu congue ligula. Curabitur molestie, tortor eget volutpat tristique,  velit leo pulvinar eros, nec molestie dolor odio eget nibh. Fusce facilisis nisl sit amet erat placerat, eget convallis justo interdum. Praesent sit amet arcu dapibus, eleifend mi quis, hendrerit diam. Praesent condimentum varius nunc, at tincidunt risus hendrerit in. Donec ut ligula ligula.    Aliquam ultricies ut ligula non mattis. Quisque a mauris neque. Sed eu vulputate nisl. Suspendisse pulvinar et tellus in congue. Ut lacinia lorem justo, a viverra urna molestie vitae. Integer malesuada ante risus, rutrum vehicula turpis sagittis ultricies.
    
      Suspendisse aliquet elit tortor. Etiam libero est, cursus mollis molestie sit amet, hendrerit in arcu. Phasellus consequat, arcu at fermentum sollicitudin, eros metus convallis neque, in volutpat quam velit eget neque. Vivamus bibendum, urna in convallis imperdiet, quam leo ornare tortor, quis ullamcorper erat massa sed velit. Etiam congue sodales ornare. Aenean quis leo a mi venenatis lacinia. Sed blandit ultricies orci ac accumsan.
    </div>;
  }
});

var ThreeUp = React.createClass({
  render: function() {
    return <div id="three-up-container">
      <div className="three-up__item">
        <img src="http://placehold.it/400x400" className="three-up__image" />
      </div>      
      <div className="three-up__item">
        <img src="http://placehold.it/400x400" className="three-up__image" />
      </div>   
      <div className="three-up__item">
        <img src="http://placehold.it/400x400" className="three-up__image" />
      </div>   
    </div>;
  }
});

var Footer = React.createClass({
  render: function() {
    return <ul className="footer__list">
      <li className="footer__item"><a href="#" className="footer__link">Home</a></li>
      <li className="footer__item"><a href="#" className="footer__link">About</a></li>
      <li className="footer__item"><a href="#" className="footer__link">Careers</a></li>
      <li className="footer__item"><a href="#" className="footer__link">Contact</a></li>      
    </ul>;
  }
});

ReactDOM.render(
  <Hero />,
  document.getElementById('hero')
);

ReactDOM.render(
  <Editorial />,
  document.getElementById('editorial1')
);

ReactDOM.render(
  <Editorial />,
  document.getElementById('editorial2')
);

ReactDOM.render(
  <ThreeUp />,
  document.getElementById('three-up')
);

ReactDOM.render(
  <Footer />,
  document.getElementById('footer')
);
