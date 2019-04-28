import React from 'react';
import axios from 'axios'
// import Hero from "../components/Hero";
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";

class LoginBtn extends React.Component{

state={

Authenticated:false

}
isAuthenticated=()=>{
    axios.get(`/auth/isAuthenticaed`).then((resp)=>{

        this.setState({Authenticated:resp})

    })
}

Login=()=>{
    axios.get(`/auth/login/github`).then(
           this.isAuthenticated()
    )
}
Logout=()=>{
    axios.get(`/auth/logout`).then(
           this.isAuthenticated()
    )
}


render(){
    if(this.state.Authenticated){
        return(

            <button className="btn" type="button" onClick={this.Login}>Login</button>
        )
    }
    else{
        return(

            <button className="btn" type="button" onClick={this.Logput}>Logout</button>
        )
    }

}

}
export default LoginBtn