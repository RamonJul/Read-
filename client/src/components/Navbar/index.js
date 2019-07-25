import React from "react";
import { Link } from "react-router-dom";
import logo from '../../logo.svg';
import LoginBtn from './../LoginBtn'
import Row from '../Row';
import Col from '../Col';
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar(props) {

  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
        <Row id="w-100">

        <Col className="profileBar" size="md-12">
          <div className="d-flex flex-row align-items-center">
          <Link className="navbar-brand" to="/">
            <img id="logo" src={logo} alt="logo"/>
          </Link>
          <ul className="navbar-nav" >
              <li className="nav-item">
                <Link
                  to="/"
                  className={
                    window.location.pathname === "/" ? "nav-link active" : "nav-link"
                  }
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/category"
                  className={window.location.pathname === "/category" ? "nav-link active" : "nav-link"}
                >
                  Categories
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/#"
                  className={window.location.pathname === "/favourites" ? "nav-link active" : "nav-link"}
                >
                  Favourites
                </Link>
              </li>
            </ul>
          </div>
          <div>
         <img alt="profile" className="profilepic" src={(props.authenticated)? props.user.profilepic : "https://previews.123rf.com/images/kritchanut/kritchanut1406/kritchanut140600093/29213195-male-silhouette-avatar-profile-picture.jpg"}/>
         <ul className="navbar-nav">
            <li className="nav-item">
            <LoginBtn authenticated={props.authenticated} change={props.change}/>
              </li>
            
              <li className="nav-item">
              {props.authenticated ?
              (<Link
                to={`/user/${props.userId}`}
                className="nav-link"
              >
              Profile
              </Link>) : (
                ""
              )
            } 
              </li>
            </ul>
         </div>
          </Col>


          </Row>  
        <Row id="w-100">
        <Col className="userBar" size="md-12">
         
        
         
          
            
            
          </Col>
        
        </Row>
      </nav>
    
  );
}

export default Navbar;
