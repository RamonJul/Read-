import React from 'react';
import API from '../utils/API';
import Posty from '../components/Post/Post.js'
import Comment from '../components/Comment'

export default class Post extends React.Component {

    state = {
        post: {
            location: "",
            post: "",
            title: "",
            author: "",
            image: "",
        },
        comments: []
    }
    
    componentDidMount() {
        API.getComment(this.props.match.params.category, this.props.match.params.postId)
            .then(res => {
                if(res.data.comments){
                this.setState({ post: res.data.post, comments: res.data.comments })
                }
                else{
                    this.setState({ post: res.data.post })
                }
            })
            .catch(err => console.log(err))
    }
    
    render() {
        return(
            <div>
                <div className="d-flex flex-column">
                    <Posty  postId={this.props.match.params.postId} Category={this.props.match.params.category} postDescription={this.state.post.post} postImage={this.state.post.image} postTitle={this.state.post.title} Author={this.state.post.author} />
                </div>
                <div className="w-100 bg-dark" style={{height: 3}}></div>
                {this.state.comments.map((c,i) => 
                    <Comment id={c.id} post={c.post} children={c.children} key={c.id} author={c.author} category={this.props.match.params.category} postId={this.props.match.params.postId}/>
                )}
            </div>
        )
    }
}