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

             <a href= "https://fathomless-inlet-59388.herokuapp.com/auth/login/callback"  ><button className="btn" onClick={this.LogIn} type="button">Login</button></a>

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