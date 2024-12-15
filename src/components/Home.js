import { useNavigate, Link } from "react-router-dom";
import { useContext, useCallback } from "react";
import AuthContext from "../context/AuthProvider";

const Home = () => {
    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    const logout = useCallback(async () => {
        // Consider moving this logic to a context or a custom hook if reused
        setAuth({});
        navigate('/linkpage');
    }, [setAuth, navigate]);

    const links = [
        { path: "/editor", label: "Go to the Editor page" },
        { path: "/admin", label: "Go to the Admin page" },
        { path: "/lounge", label: "Go to the Lounge" },
        { path: "/linkpage", label: "Go to the link page" }
    ];

    return (
        <section>
            <h1>Home</h1>
            <p>You are logged in!</p>
            {links.map(({ path, label }) => (
                <div key={path}>
                    <Link to={path}>{label}</Link>
                </div>
            ))}
            <div className="flexGrow">
                <button onClick={logout}>Sign Out</button>
            </div>
        </section>
    );
}

export default Home;
