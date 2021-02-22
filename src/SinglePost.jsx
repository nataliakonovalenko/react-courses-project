import React from "react";
import ReactLogo from './assets/logo.svg'

const SinglePost = () => {
    return(
        <div className={"single-post"}>
            <h1>React Logo</h1>
            <img className={"logo"} src={ReactLogo} alt={"logo"} />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </div>
    )
}

export default SinglePost;

