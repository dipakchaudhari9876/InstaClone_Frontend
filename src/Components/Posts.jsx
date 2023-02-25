import React, { useEffect, useState } from "react";
import { fetchData } from "../utilities/utils";
import Post from "./Post";
const Posts = () => {

    const [postDetails, setPostDetails] = useState([])
    useEffect(()=>{
        fetchData()
        .then((data)=>{
            setPostDetails(data)
        })
    },[])

    return (
        <div className="postsContainer">
            {postDetails.map((post) => {
                return (
                        <Post
                         key={post._id}
                         {...post}

                         />

                )
            })}
        </div>
    )
}
export default Posts