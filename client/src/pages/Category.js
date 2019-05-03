import React from 'react';
import API from '../utils/API';
import Card from '../components/Card';
import texture from '../texture.jpg';
import { Input, FormBtn, TextArea } from "../components/Form";
import Post from '../components/Post/Post';
import Container from '../components/Container';
import { Modal, Button } from 'react-bootstrap';
import logo from '../logo.svg'

export default class Category extends React.Component {
    state = {
        categories: [],
        posts: [],
        newCat: "",
        show: false,
        newPost: {
            title: "",
            post: "",
            location: this.props.match.params.category,
            author: "GetFromCookies?",
            image: logo
        },
    }

    componentDidMount() {
        this.loadPosts();
        this.loadCats(); 
        API.userInfo().then(res => this.setState({newPost: {
            title: this.state.newPost.title,
            post: this.state.newPost.post,
            location: this.state.newPost.location,
            author: res.data.id,
            image: this.state.newPost.image
        }}))
    }

    loadCats = () => {
        API.allCategories()
            .then(res => this.setState({categories: res.data, newCat:""}));
    }

    loadPosts = () => {
        API.getCategory(this.props.match.params.category)
            .then(res =>{ 
                console.log(res.data)    
                this.setState({posts: res.data})
            })
    }

    handleInput = e => {
        const { value } = e.target;
        this.setState({
            newCat: value
        }); 
    };

    handleTitleChange = e => {
        const { value } = e.target
        this.setState({
            newPost: {
                title: value,
                post: this.state.newPost.post,
                location: this.state.newPost.location,
                author: this.state.newPost.author,
                image: this.state.newPost.image
            }
        })
    }

    handlePostChange = e => {
        const { value } = e.target
        this.setState({
            newPost: {
                title: this.state.newPost.title,
                post: value,
                location: this.state.newPost.location,
                author: this.state.newPost.author,
                image: this.state.newPost.image
            }
        })
    }

    handleFormSubmit = e => {
        e.preventDefault();
        API.makeCategory({category: this.state.newCat})
            .then(res => this.loadCats())
            .catch(err => console.log(err));
    }

    handleClose = () => {
        this.setState({ show: false });
    }
    
    handleShow = () => {
    this.setState({ show: true });
    }

    handleNewPost = e => {
        // e.preventDefault();
        API.makePost(this.props.match.params.category, this.state.newPost)
            .then(res => this.loadPosts())
            .catch(err => console.log(err));
        this.handleClose();
    }

    OpenWidget=(widget)=>{
        // e.preventDefault();
        widget.open()
    }
    
    CloseWidget=widget=>{
    
        widget.close()
    }

    checkUploadResult = (error, result) => {
        if (error) {
            console.log(error)
        } else if (!error && result && result.event === "success") {
            console.log('Done! Here is the image info: ', result.info);
            let imgUrl = result.info.url
    
            this.setState({newPost: {
                            title: this.state.newPost.title,
                            post: this.state.newPost.post,
                            location: this.state.newPost.location,
                            author: this.state.newPost.author,
                            image: result.info.url
            }})
        }
    }
    
    render() {
        if(!this.props.match.params.category){

            return (
                <div className="d-flex flex-column container">
                <h1>Click the category below that you want to join, or make your own!</h1>
                    <div className="d-flex flex-row wrap">
                        {this.state.categories.map((c,i) =>
                            <Card key={i} image={texture}><a href={`/category/${c.categories}`}>{c.categories}</a></Card>)
                        }
                    </div>
                    <div className="new-cat mt-3">
                        <form>
                            <Input
                                value={this.state.newCat}
                                onChange={this.handleInput}
                                name="category"
                                placeholder="Your Category"
                            />
                            <FormBtn
                                disabled={!this.state.newCat}
                                onClick={this.handleFormSubmit}
                            >
                                Create
                            </FormBtn>
                        </form>
                    </div>
                </div>
            )
        }
        else{

            let widget = window.cloudinary.createUploadWidget({
                cloudName: `daawmv4sy`,
                uploadPreset: `tzbvcytv`,
                sources: [`local`, `url`],
                defaultSource: `local`
            
            }, (error, result) => {this.checkUploadResult(error, result)})

            return (
                <div className="d-flex flex-row">
                    <div className="d-flex flex-column container">
                        <header className="h1 text-center "><ins>{this.props.match.params.category}</ins></header>
                        <Container>
                            {this.state.posts.map((p,i) => 
                            <Post postId={p.id} key={i} postTitle={p.title} postDescription={p.post} reply={true} postImage={p.image} Category={p.location} Author={p.author}/>)}
                        </Container>    
                    </div>
                    <div className="d-flex flex-column">
                        <button onClick={() => this.handleShow()} className="btn btn-primary mr-5">Create New Post</button>
                        <button onClick={() => this.OpenWidget(widget)}>Upload Photo</button>
                        <Modal show={this.state.show} onHide={this.handleClose}>
                            <Modal.Header closeButton>
                            <Modal.Title>Create New Post</Modal.Title>
                            </Modal.Header>
                            <Modal.Body><form>
                                <Input
                                    value={this.state.newPost.title}
                                    onChange={this.handleTitleChange}
                                    name="title"
                                    placeholder="Title"
                                />
                                <TextArea 
                                    value={this.state.newPost.post}
                                    onChange={this.handlePostChange}
                                    name="post"
                                    placeholder="Your Text Here"
                                />
                                <button type="button" onClick={() => this.OpenWidget(widget)}>Upload Photo</button>
                            </form></Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={() => this.handleClose()}>
                                Cancel
                            </Button>
                            <Button variant="primary" onClick={() => this.handleNewPost()}>
                                Save Changes
                            </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            )
        }
    }
}