import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();

    const isAuthorized = auth?.roles?.some(role => allowedRoles?.includes(role));
    const redirectTo = auth?.user ? "/unauthorized" : "/login";

    return isAuthorized ? <Outlet /> : <Navigate to={redirectTo} state={{ from: location }} replace />;
}

export default RequireAuth;