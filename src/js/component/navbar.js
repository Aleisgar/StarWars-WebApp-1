import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <div className="container">
       
          <Link to="/"> 
		  <a className="navbar-brand"/>
            <img
              src="/img/pngwing.com.png"
              alt=""
              width="30"
              height="24"
			  className="img-fluid"
            />
          </Link>
        </div>{" "}
     
      {/* <nav class="navbar navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24">
    </a>
  </div>
</nav> */}
      <div className="ml-auto">
        <Link to="/demo">
          <button className="btn btn-primary">
            Check the Context in action
          </button>
        </Link>
      </div>
    </nav>
  );
};
