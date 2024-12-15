import { Link } from "react-router-dom";

const LinkPage = () => {
    const publicLinks = [
        { to: "/login", label: "Login" },
        { to: "/register", label: "Register" },
    ];

    const privateLinks = [
        { to: "/", label: "Home" },
        { to: "/editor", label: "Editors Page" },
        { to: "/admin", label: "Admin Page" },
    ];

    return (
        <section>
            <h1>Links</h1>
            <h2>Public</h2>
            <div>
                {publicLinks.map(({ to, label }) => (
                    <Link key={to} to={to}>{label}</Link>
                ))}
            </div>
            <h2>Private</h2>
            <div>
                {privateLinks.map(({ to, label }) => (
                    <Link key={to} to={to}>{label}</Link>
                ))}
            </div>
        </section>
    );
};

export default LinkPage;
