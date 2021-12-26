import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isUserAuthenticated, setIsUserAuthenticated] = useState(
        Boolean(localStorage.getItem("sra-user-token"))
    );

    const handleUserAuthentication = (token, cb) => {
        let userToken = token;

        if (userToken) {
            localStorage.setItem("sra-user-token", userToken);
        } else {
            localStorage.removeItem("sra-user-token");
        }

        setIsUserAuthenticated(Boolean(userToken));

        if (cb) cb();
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
