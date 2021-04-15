import React from "react";
import "../styles/pages/no-match.scss";
import { Link } from "react-router-dom"

const NoMatch = () => {
    return(
        <div className="no-match-page">
            <div className="container">
                <h1>Page not found</h1>
                <span className="page-number">404</span>
                <Link className="btn btn-outline" to="/">Go back to home</Link>
            </div>
        </div>
    )
};

export default NoMatch;