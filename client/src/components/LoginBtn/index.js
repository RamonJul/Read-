import React from "react";
import API from "./../../utils/API"
import axios from 'axios';
class Loginbutton extends React.Component{

state={

Authenticated:false

}
componentDidMount=()=>{
    this.isAuthenticated()
}




isAuthenticated=()=>{
    API.isAuthenticated()
    .then((resp)=>{
        console.log(resp.data)
        this.setState({Authenticated:resp.data})

    })
}

Logout=()=>{
   API.Logout().then(()=>this.isAuthenticated())
}


render(){
    if(!this.state.Authenticated){
        return(

             <a href="http://localhost:3001/auth/login/github"><button className="btn" type="button">Login</button></a>

        )
    }
    else{
        return(

            <button className="btn" type="button" onClick={this.Logout}>Logout</button>
        )
    }

}

}
export default Loginbutton