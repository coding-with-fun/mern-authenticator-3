import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const SignIn = () => {
    const { handleUserAuthentication } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    return (
        <div>
            <h3>Sign In</h3>

            <button
                onClick={() => {
                    handleUserAuthentication("test");
                    navigate(from, {
                        replace: true,
                    });
                }}
            >
                Sign In
            </button>
        </div>
    );
};

export default SignIn;
