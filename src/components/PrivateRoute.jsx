import { Navigate } from "react-router";
import useAuthContext from "../hooks/useAuthContext";

const PrivateRoute = ({children}) => {
    const {user} = useAuthContext();
    if(user === null) return <p>Loding...</p>
    return user ? children : <Navigate to="/login" />
};

export default PrivateRoute;