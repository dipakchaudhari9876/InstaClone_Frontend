import React from "react";
import { Link } from "react-router-dom";
import {BsFillCameraFill} from 'react-icons/bs'
const NavBar =()=>{
    return(
        <header >
            <nav className="header">
                <div className="logo">
                    <Link to={'/instaclone'} className={'logo'}>
                    <img src="https://camo.githubusercontent.com/9cf795df7da35d57df8c6f17883d3c3a4cbe9611716ad62f149d08ec3de2fa59/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f647277623139637a6f2f696d6167652f75706c6f61642f76313539313437363937352f4e65775f50726f6a6563745f315f796b3234626a2e706e67" alt="logo"/>
                    </Link>
                </div>
                    {/* <img src="https://w7.pngwing.com/pngs/639/614/png-transparent-computer-icons-camera-camera-photography-rectangle-camera-icon-thumbnail.png" alt="camera icon"/> */}
                    <Link to={'/upload'} className={'cameraIcon'}>
                        <BsFillCameraFill></BsFillCameraFill>
                    </Link>
            </nav>
            
        </header>
        
    )
}
export default NavBar