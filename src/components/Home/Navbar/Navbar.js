import React from "react";
import "./Navbar.css";
import logo from "../../../images/logo.png";

const Navbar = () => {
  return (
    <section id="navbar" className="">
      <div className="top-header container-fluid">
        <h4>EIIN: 12345 || College Code: 234567</h4>
        <h4>My Account</h4>
      </div>

      <div className="header-logo container-fluid">
        <img className="img-fluid" src={logo} alt="" />
      </div>

      <div className="container ">

        <div className="row nav-header">
          <div className="col-md-2 text-center nav-text">
            <p className="nav-date" >November 25, 2021</p>
            <p style={{borderBottom: '2px solid gray'}}></p>
            <p style={{marginTop: '0px'}}>Scrolling News</p>
          </div>
          
          <div className="col-md-10 ">

            <nav className="navbar navbar-expand-lg navbar-light">
              {/* <a className="navbar-brand " href="#">
                November 25, 2021
              </a> */}
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                  <li className="">
                    <a className="nav-link" href="#">
                      Home |
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Academic |
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Administration |
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Result |
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Gallery |{" "}
                    </a>
                  </li>{" "}
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </nav>

            <div>
              <p className="nav-newsText">Welcome to Education School and College</p>
              
            </div>

          </div>
        </div>

        {/* <ul>
          <li>
            <a href="">Home |</a>
          </li>
          <li>
            <a href="#">Academic |</a>
          </li>
          <li>
            <a href="">Administration |</a>
          </li>
          <li>
            <a href="">Result |</a>
          </li>
          <li>
            <a href="">Notice |</a>
          </li> <li>
            <a href="">Gallery |</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul> */}
      </div>
    </section>
  );
};

export default Navbar;
