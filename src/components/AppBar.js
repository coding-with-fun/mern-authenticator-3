import React from "react";
import { Link } from "react-router-dom";

const AppBar = () => {
    return (
        <nav>
            <Link to="/">Home</Link> | <Link to="/signin">Sign In</Link> |{" "}
            <Link to="/profile">Profile</Link>
        </nav>
    );
};

export default AppBar;
