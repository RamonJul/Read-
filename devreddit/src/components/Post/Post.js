import React from 'react';
import logo from '../../logo.svg';

export default function Post(props) {
    return (
        <div className="card m-2 flex-row flex-nowrap post-box">
            <div className="card-header border-0 justify-content-center image-box">
                <img src={props.postImage || logo} alt="" className="post-image card-img" />
            </div>
            <div className="d-flex flex-column w-75">
                <div className="card-block px-2">
                    <a href={`/category/${props.Category}/id/${props.postId}`} className="card-title h4">{props.postTitle || "Title"}</a>
                    <p className="font-italic">{props.Category || "Category"}</p>
                    <p className="card-text">{props.postDescription || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt consequat metus, nec finibus augue imperdiet eget. In hac habitasse platea dictumst. Ut vestibulum tempor justo, quis eleifend tortor congue at. Maecenas vitae interdum leo. Duis vel velit at nulla volutpat fringilla at eu nunc. Vivamus suscipit finibus neque, vel."}</p>
                </div>
                <div className="w-100"></div>
                <div className="d-flex flex-row mt-5 justify-items-between">
                    <a href={`/user/${props.UserId}`} className="font-italic m-2 justify-self-start">{props.Author || "Author"}</a>
                </div>
            </div>
        </div>
    )
}