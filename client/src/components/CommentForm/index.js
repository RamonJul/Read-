import React from 'react';
import { TextArea, FormBtn } from '../Form';
import API from '../../utils/API';

export default class commentForm extends React.Component{

    state = {
        show: false,
        loggedIn:false,
        comment: "",
        author:"something something cookies",
    }
    componentDidMount(){
        this.checkIfLoggedIn()
        API.userInfo().then(res => this.setState({
            author: res.data.id,
        }))
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleReply = () => {
        this.setState({ show: true })
    }
    checkIfLoggedIn=()=>{
        
        API.isAuthenticated()
        .then((resp)=>{
           this.setState({
               loggedIn:resp.data
           })
    
        })
      
    }


    handleSubmit = e => {
        e.preventDefault();
        API.makeComment(this.props.category, this.props.postId, {
            parentId: this.props.id,
            post: this.state.comment,
            title: "420",
            author: this.state.author,
            postId: this.props.postId
        }).then(()=>
        {
        this.setState({show: false })
        this.props.commenting()
        })
        .catch(err => console.log(err))

    }
    dispalay=()=>{
        if(this.state.loggedIn){
            return this.state.show ? (                    
                <form>
                  <TextArea name="comment" onChange={this.handleInputChange} placeholder="Reply..."/>
                  <FormBtn onClick={this.handleSubmit}>Comment</FormBtn>
                </form>
                ) : (
                  <a href="#" onClick={() => this.handleReply()}><em>Reply</em></a>
                )

        }
        else return


    }

    render(){

        return(
            <div className="text-muted">
                {this.dispalay()}
              </div>
        )
    }

}