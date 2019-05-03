import React from "react";
import { Link } from "react-router-dom";
import logo from '../../logo.svg';
import LoginBtn from './../LoginBtn'
import Row from '../Row';
import Col from '../Col';
import "./style.css";
import API from '../../utils/API'

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar(props) {

  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Row id="w-100">
          <Col size="md-1">
          <Link className="navbar-brand" to="/">
            <img id="logo" src={logo} alt="logo"/>
          </Link>
          </Col>
          <Col size="md-5">
          <div className="mt-5">
            <ul className="navbar-nav">
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
          </Col>
          <Col size="md-6">
          <Row>
            <Col size="10"></Col>
            <Col size="2"><img alt="profile picture" className="profilepic" src={props.user.profilepic || "https://previews.123rf.com/images/kritchanut/kritchanut1406/kritchanut140600093/29213195-male-silhouette-avatar-profile-picture.jpg"}/></Col>
          </Row>
          <Row>
            <Col size="8"></Col>
            <Col size="4">
            <ul className="navbar-nav user-nav">
                  <LoginBtn></LoginBtn>
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
            </Col>
          </Row>
          </Col>
        </Row>
      </nav>
    
  );
}

export default Navbar;
