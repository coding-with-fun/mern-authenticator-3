import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    let userToken = Boolean(localStorage.getItem("sra-user-token"));
    const [isUserAuthenticated, setIsUserAuthenticated] = useState(userToken);

    const handleUserAuthentication = (token, cb) => {
        userToken = token;

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
