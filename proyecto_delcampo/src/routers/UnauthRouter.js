import { Route, Routes } from "react-router";
import Login from "../components/Login";
import NotFound from "../components/NotFound";
import Registration from "../components/Registration";

const UnauthRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/" element={<Registration/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </>
    )
}

export default UnauthRouter;

