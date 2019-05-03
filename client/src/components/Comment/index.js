import React from 'react';
import './style.css';
import CommentForm from '../CommentForm';
import API from '../../utils/API';

export default class Comment extends React.Component {
    state={
        name:""

    }


    componentDidMount(){
  
        API.userData(this.props.author).then((res)=>{
            let name=res.data.name
            this.setState({
                name:name
            })
        })

    }

    render() {
        return (
            <div className="comment p-2 d-flex flex-column">
                <div><strong>{this.state.name}</strong></div>
                <div className="text-muted p-4">{this.props.post}</div>
                <div className="w-100"></div>
                <CommentForm commenting={this.props.commenting} postId={this.props.postId} id={this.props.id} category={this.props.category}/>
                <div className="ml-1">
                    {this.props.children ? (
                        this.props.children.map(c => 
                            <Comment commenting={this.props.commenting} id={c.id} post={c.post} children={c.children} key={c.id} author={c.author} category={this.props.category} postId={this.props.postId}/>)
                    ) : ("")}
                </div>
            </div>
        )
    }
}