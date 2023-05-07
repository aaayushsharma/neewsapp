import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Link
} from "react-router-dom";


const Navbar=()=> {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
  <a className="navbar-brand" href="/">NewsMonkey</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item"><Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link></li>
       <li className="nav-item"><Link className="nav-link" to="/business">business</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/">general</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/health">health</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/entertainment">entertainment</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/science">science</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/sports">sports</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/technology">technology</Link></li>

      {/* <li className="nav-item"><a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a></li>
      {/* <li className="nav-item"><Link className="nav-link" to="/">About</Link></li>  */}
       {/* <li className="nav-item"><a className="nav-link" href="/business">business</a></li>
      <li className="nav-item"><a className="nav-link" href="/">general</a></li>
      <li className="nav-item"><a className="nav-link" href="/health">health</a></li>
      <li className="nav-item"><a className="nav-link" href="/entertainment">entertainment</a></li>
      <li className="nav-item"><a className="nav-link" href="/science">science</a></li>
      <li className="nav-item"><a className="nav-link" href="/sports">sports</a></li>
      <li className="nav-item"><a className="nav-link" href="/technology">technology</a></li> */} */
     </ul>
  </div>
</nav>
      </div>
    )
  
}

export default Navbar
