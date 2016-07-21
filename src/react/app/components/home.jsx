import React from 'react';
import Hero from './shared/hero.jsx';
import Editorial from './shared/editorial.jsx';
import ThreeUp from './shared/three-up.jsx';

const Home = React.createClass({
  render: () => (
      <div className="home">
        <Hero />
        <Editorial />
        <ThreeUp />
        <Editorial />        
      </div>
    )  
});

export default Home;
