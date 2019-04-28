import React from 'react';
import './style.css';
import { TextArea, FormBtn } from '../Form';
import API from '../../utils/API';

export default class Comment extends React.Component {
    state = {
        show: false,
        comment: "",
        author:"something something cookies",
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

    handleSubmit = e => {
        e.preventDefault();
        API.makeComment(this.props.category, this.props.postId, {
            parentId: this.props.id,
            post: this.state.comment,
            title: "420",
            author: this.state.author,
            postId: this.props.postId
        }).then( this.setState({show: false }))
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="comment p-2 d-flex flex-column">
                <div><strong>{this.props.author}</strong></div>
                <div className="text-muted p-4">{this.props.post}</div>
                <div className="w-100"></div>
                <div className="text-muted">{this.state.show ? (
                  <form>
                    <TextArea name="comment" onChange={this.handleInputChange} placeholder="Reply..."/>
                    <FormBtn onClick={this.handleSubmit}>Comment</FormBtn>
                  </form>
                ) : (
                    <a href="#" onClick={() => this.handleReply()}><em>Reply</em></a>
                )}
                </div>
                <div className="ml-1">
                    {this.props.children ? (
                        this.props.children.map(c => 
                            <Comment id={c.id} post={c.post} children={c.children} key={c.id} author={c.author} category={this.props.category} postId={this.props.postId}/>)
                    ) : ("")}
                </div>
            </div>
        )
    }
}