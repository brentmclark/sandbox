import React from 'react';

const ThreeUp = React.createClass({
  render: () => (
      <div id="three-up-container">
          <div className="three-up__item">
              <img src="http://placehold.it/480x480" className="three-up__image" />
          </div>      
          <div className="three-up__item">
              <img src="http://placehold.it/480x480" className="three-up__image" />
          </div>   
          <div className="three-up__item">
              <img src="http://placehold.it/480x480" className="three-up__image" />
          </div>   
      </div>
    )  
});

export default ThreeUp;