import React from 'react';
import Post from '../components/Post/Post'
import Container from '../components/Container'
import API from '../utils/API';

export default class Home extends React.Component {
    state = {
        recentPosts: []
    }

    loadRecent = () => {
        API.getRecent()
            .then(res => this.setState({recentPosts: res.data}))
    }

    render() {
        return (
            <div>
                <Container>
                    {this.state.recentPosts.map(p => <Post postId={p.postId} postTitle={p.title} />)}
                </Container>
            </div>
        )
    }
}