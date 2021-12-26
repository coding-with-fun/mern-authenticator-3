import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PublicRouter = ({ children }) => {
    const { isUserAuthenticated } = useContext(AuthContext);

    if (isUserAuthenticated) {
        return <Navigate to="/" replace={true} />;
    }

    return children;
};

export default PublicRouter;
