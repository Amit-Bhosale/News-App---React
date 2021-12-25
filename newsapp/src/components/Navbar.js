import React, { Component } from "react";
import { Link } from "react-router-dom";






export class Navbar extends Component {
  constructor(props) {
    super(props);
    console.log("Hello its me constructor");
  }




  render() {
    return (
      <div className="sticky-top">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              News Daily
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/">
                    Link
                  </Link>
                </li>
                <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            News Types
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><Link className="dropdown-item" to="/">General</Link></li>
            <li><Link className="dropdown-item" to="/Business">Business</Link></li>
            <li><Link className="dropdown-item" to="/Health">Health</Link></li>
            <li><Link className="dropdown-item" to="/Sports">Sports</Link></li>
            <li><Link className="dropdown-item" to="/Entertainment">Entertainment</Link></li>
            <li><Link className="dropdown-item" to="/Technology">Technology</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Country
          </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href='#' onClick={()=>this.props.setCountry('in')}>India</a></li> 
              <a className="dropdown-item" href="#"  onClick={()=>this.props.setCountry('us')}>America</a>
            </ul>
          </li>
              </ul>
            </div>
          </div>
        </nav>
        
      </div>

    );
  }
}

export default Navbar;
