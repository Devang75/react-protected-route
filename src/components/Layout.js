import { Outlet } from "react-router-dom";
import React from "react";

const Layout = () => (
    <main className="App">
        <Outlet />
    </main>
);

export default Layout;
