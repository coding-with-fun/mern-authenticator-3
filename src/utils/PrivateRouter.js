import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRouter = ({ children }) => {
    const { isUserAuthenticated } = useContext(AuthContext);
    const location = useLocation();

    if (!isUserAuthenticated) {
        return (
            <Navigate
                to="/signin"
                state={{
                    from: location,
                }}
                replace={true}
            />
        );
    }

    return children;
};

export default PrivateRouter;
