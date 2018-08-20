import React,{Component} from 'react';

import './Home.css'

class Header extends Component {
  render() {
      return (
      <div className="header">
        <h1>Contact List</h1>
        <p>React production ready application for maintaining contact information</p>
      </div>
      );
  }
}

export default Header;