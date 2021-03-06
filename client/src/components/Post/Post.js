import React from 'react';
import logo from '../../logo.svg';
import API from '../../utils/API';
import CommentForm from '../CommentForm';
import './style.css';
export default class Post extends React.Component {
    state={
        id:"",
        name:""

    }
    componentDidMount(){
        API.userData(this.props.Author).then((res)=>{
            let name=res.data.name
            this.setState({
                id:this.props.postId,
                name:name
            })
        })

    }

    componentDidUpdate(){
        if(this.state.id!==this.props.postId){
        API.userData(this.props.Author).then((res)=>{
            let name=res.data.name
            this.setState({
                id:this.props.postId,
                name:name
            })
        })
    }
    }


    render(){
    return (
        <div className="card m-2 flex-row flex-nowrap post-box">
            <div className="card-header border-0 justify-content-center image-box">
                <img src={this.props.postImage || logo} alt="" className="post-image card-img" />
            </div>
            <div className="d-flex flex-column w-75">
                <div className="card-block px-2">
                    <a href={`/category/${this.props.Category}/id/${this.props.postId}`} className="card-title h4">{this.props.postTitle}</a>
                    <p className="font-italic">{this.props.Category }</p>
                    <p className="card-text">{this.props.postDescription }</p>
                </div>
                <div className="w-100"></div>
                <div className="d-flex flex-row mt-5 justify-items-between">
                    <div className="font-italic m-2 justify-self-start">{this.state.name}</div>
                </div>
                
            <CommentForm authenticated={this.props.authenticated} commenting ={this.props.commenting}postId={this.props.postId} id={this.props.postId} category={this.props.category}/>
            </div>
        </div>
    )
    }
}