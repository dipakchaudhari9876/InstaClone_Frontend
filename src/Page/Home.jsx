import React from "react";
import { NavLink } from "react-router-dom";
const Home = () => {
    return (
        <div className="homeContainer">
            <div className="containerMain">
                <img src="/images/post-images/homeImg.avif" alt="home" height="400px" width={"300px"}/>
                <div className="function">
                    <div className="title">10x TEAM 04</div>
                    <button><NavLink to={"/instaclone"}>Enter</NavLink></button>
                </div>
            </div>
        </div>
    )
}
export default Home