import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Profile = () => {
    const { handleUserAuthentication } = useContext(AuthContext);

    return (
        <div>
            <h3>Profile</h3>

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

export default Profile;
