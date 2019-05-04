import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import Post from './pages/Post';
import FourOhFour from './pages/404';
import User from './pages/User';
import Footer from './components/Footer';
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import './App.css';
import API from './utils/API';

class App extends Component {

  state={
    user: "",
    authenticated: false
  }

  componentDidMount(){
    API.userInfo().then(res=>this.setState({
      user: res.data
    }))
    API.isAuthenticated().then(res=>this.setState({ authenticated: res.data}))
  }

  changeState=()=>{
    API.isAuthenticated().then(res=>this.setState({ authenticated: res.data}))

  }

  render() {
    return (
      <Router>
        <div>
          <Navbar user={this.state.user} authenticated={this.state.authenticated} change={this.changeState}/>
          <Wrapper>
            <Switch>
              <Route exact path="/"  render= {(props) => <Home {...props} authenticated={this.state.authenticated}/>}  />
              <Route exact path="/category" render= {(props) => <Category  {...props}  authenticated={this.state.authenticated}/>}/>
              <Route exact path="/category/:category" render= {(props) => <Category {...props} authenticated={this.state.authenticated}/>} />
              <Route exact path="/category/:category/id/:postId"  render= {(props) => <Post {...props} authenticated={this.state.authenticated}/>}  />
              <Route exact path="/user/:userId"  render= {(props) => <User {...props} user={this.state.user}/>} />
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
