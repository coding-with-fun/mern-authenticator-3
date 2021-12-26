import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const About = () => {
    const { handleUserAuthentication } = useContext(AuthContext);

    return (
        <div>
            <h3>About</h3>

            <button
                onClick={() => {
                    handleUserAuthentication();
                }}
            >
                Sign Out
            </button>
        </div>
    );
};

export default About;
