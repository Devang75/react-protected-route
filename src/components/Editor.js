import { Link } from "react-router-dom";
import React from "react";

const Editor = () => (
    <section>
        <h1>Editors Page</h1>
        <p>You must have been assigned an Editor role.</p>
        <div className="flexGrow">
            <Link to="/">Home</Link>
        </div>
    </section>
);

export default Editor;
