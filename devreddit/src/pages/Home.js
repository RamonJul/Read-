import React from 'react';
import Post from '../components/Post/Post'
import Container from '../components/Container'

export default class Home extends React.Component {

    render() {
        return (
            <div>
                <Container>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                </Container>
            </div>
        )
    }
}