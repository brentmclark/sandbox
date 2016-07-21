import React from 'react';
import { Link } from 'react-router';
import Header from './header.jsx';
import Footer from './footer.jsx';

const MainLayout = React.createClass({
  render: function() {
    return (
      <div className="app">
        <header className="header">
          <Header />
        </header>        
        <main>
          {this.props.children}
        </main>
        <footer className="footer">
          <Footer />
        </footer> 
      </div>
    );
  }
});

export default MainLayout;
