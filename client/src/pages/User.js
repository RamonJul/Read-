import React from 'react';

export default class User extends React.Component {    
    render() {
        return(
            <div>
                <div className="card m-2 flex-row">
                    <div className="card-header border-0 image-box">
                        <img src={this.props.user.profilepic} alt="Profile pic" />
                    </div>
                    <div className="d-flex flex-column w-75">
                        <div className="card-block px-2">
                            <span className="h1 m-auto">Name: {this.props.user.name}</span>
                            <h3>Email: {this.props.user.email}</h3>
                            <h3>Username: {this.props.user.userNAME}</h3>
                            <p>User since: {this.props.user.createdAt}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}