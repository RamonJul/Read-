import React from 'react';
import API from '../utils/API';
import Card from '../components/Card';
import texture from '../texture.jpg';
import { Input, FormBtn } from "../components/Form";

export default class Category extends React.Component {
    state = {
        categories: [],
        newCat: ""
    }

    componentDidMount() {
        this.loadCats();
    }

    loadCats = () => {
        API.allCategories()
            .then(res => this.setState({categories: res.data}));
    }

    handleInput = e => {
        const { value } = e.target;
        this.setState({
            newCat: value
        }); 
    };

    handleFormSubmit = e => {
        e.preventDefault();
            API.makeCategory(this.state.newCat)
    }
    
    render() {
        return (
            <div className="d-flex flex-column container">
            <h1>Click the category below that you want to join, or make your own!</h1>
                <div className="d-flex flex-row wrap">
                    {this.state.categories.map((c,i) =>
                        <Card key={i} image={texture}>{c.categories}</Card>)
                    }
                </div>
                <div className="new-cat">
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
}