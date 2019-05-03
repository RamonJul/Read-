import React from 'react';
import Post from '../components/Post/Post'
import Container from '../components/Container'
import API from '../utils/API';

export default class Home extends React.Component {
    state = {
        recentPosts: []
    }
    
    componentDidMount() {
        this.loadRecent();
    }

    loadRecent = () => {
        API.getRecent()
            .then(res => this.setState({recentPosts: res.data}))
    }

    render() {
        return (
            <div>
                <Container>
                    {this.state.recentPosts.map((p,i) => 
                        <Post postDescription={p.post} postId={p.id} key={i} postTitle={p.title} postImage={p.image} Category={p.location} Author={p.author}/>)}
                </Container>
            </div>
        )
    }
}