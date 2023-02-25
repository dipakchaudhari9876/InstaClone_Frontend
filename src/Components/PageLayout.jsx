import React, { Children } from "react";
import NavBar from "./NavBar";
import Posts from "./Posts";
const PageLayout = ({children})=>{
    return(
        <div className="pageContainer">
            <NavBar/>
            <Posts/>

        </div>
    )
}
export default PageLayout