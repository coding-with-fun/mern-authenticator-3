import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isUserAuthenticated, setIsUserAuthenticated] = useState(
        Boolean(localStorage.getItem("sra-user-token"))
    );

    const handleUserAuthentication = (token) => {
        let userToken;

        if (token) {
            userToken = token;
            localStorage.setItem("sra-user-token", userToken);
        } else {
            userToken = localStorage.getItem("sra-user-token");
        }

        setIsUserAuthenticated(Boolean(userToken));
    };

    return (
        <AuthContext.Provider
            value={{
                isUserAuthenticated,

                handleUserAuthentication,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
