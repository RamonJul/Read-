import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import Post from './pages/Post';
import Login from './pages/Login';
import FourOhFour from './pages/404';
import User from './pages/User';
import Footer from './components/Footer';
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Wrapper>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/category" component={Category} />
              <Route exact path="/category/:category" component={Category} />
              <Route exact path="/category/:category/id/:postId" component={Post} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/user/:userId" component={User}/>
              <Route component={FourOhFour}/>
            </Switch>
          </Wrapper>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
