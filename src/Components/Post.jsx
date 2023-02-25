import React, { useEffect } from "react";
import { useState } from "react";
const Post = ({ name, location, likes,date,description,postImage }) => {

    return (
        <div className="postCard">
            <header className="postHeader">
                <div className="info">
                    <div className="name">{name}</div>
                    <div className="location">{location}</div>
                </div>
                <i className="fa fa-ellipsis-h fa-1x threeIcon" aria-hidden="true"
                onClick={()=>{
                    console.log("dhagat")
                }}
                ></i>
            </header>
            <section className="section">
                <img src={postImage} alt="post-img" />
            </section>
            <footer className="footer">
                <div className="review">
                    <i className="fa fa-heart-o likeBut" aria-hidden="true"></i>
                    <i className="fa fa-paper-plane-o rocketBut" aria-hidden="true"></i>
                    <div className="date">{date}</div>
                </div>
                <div className="likes">
                    {likes} likes
                </div>
                <div className="quote">
                    {description}
                </div>
            </footer>
        </div>
    )
}
export default Post