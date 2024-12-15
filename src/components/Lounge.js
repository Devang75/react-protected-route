import { Link } from "react-router-dom";

const Lounge = () => (
    <section>
        <h1>The Lounge</h1>
        <p>Admins and Editors can hang out here.</p>
        <div className="flexGrow">
            <Link to="/">Home</Link>
        </div>
    </section>
);

export default Lounge;
