import React from "react";
import API from "./../../utils/API"
class Loginbutton extends React.Component{


LogIn=()=>{this.props.change()}
Logout=()=>{
   API.Logout().then(()=>this.props.change())
}


render(){
    if(!this.props.authenticated){
        return(

             <a href="http://localhost:3001/auth/login/github"><button className="btn" onClick={this.LogIn} type="button">Login</button></a>

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