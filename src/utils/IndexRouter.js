import { Route, Routes } from "react-router-dom";
import Home from "../container/global/Home";
import Profile from "../container/private/Profile";
import SignIn from "../container/public/SignIn";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";

const IndexRouter = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route
                path="/signin"
                element={
                    <PublicRouter>
                        <SignIn />
                    </PublicRouter>
                }
            />
            <Route
                path="/profile"
                element={
                    <PrivateRouter>
                        <Profile />
                    </PrivateRouter>
                }
            />
        </Routes>
    );
};

export default IndexRouter;
