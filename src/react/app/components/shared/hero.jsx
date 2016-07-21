import React from 'react';

const Hero = React.createClass({
  render: () => (
        <picture>
        	<source srcSet="http://placehold.it/1920x650" media="(min-width: 768px)" />
            <source srcSet="http://placehold.it/768x400" media="(min-width: 480px)" />
            <img src="http://placehold.it/480x480" />
        </picture>
    )
});

export default Hero;