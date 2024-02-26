import React from "react";
import { Link, useLocation } from 'react-router-dom';

const Navbar = (props) => {
  const location = useLocation();

  // for local
  const frontendBaseUrl = "http://localhost:3000";
  
  // for remote
  // const frontendBaseUrl = "https://news-app-2312.netlify.app";

  let { NavbarTitle } = props;
  
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"><b>{NavbarTitle}</b></Link>
        <button
          className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {
              props.categories?.map((cat) => {
                let category = `${cat !== "general" ? cat : "home"}`;
                const path = `/${category !== "home" ? category : ''}`
                category = category.charAt(0).toUpperCase() + category.slice(1);
                return (
                  <li className="nav-item" key={path} >
                    {/* <Link className={`nav-link ${location.pathname === path ? 'active' : ''}`} aria-current="page" to={path} >{category}</Link> */}
                    <a className={`nav-link ${location.pathname === path ? 'active' : ''}`} href={`${frontendBaseUrl}${path}`}>{category}</a>
                  </li>
                )
              })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;