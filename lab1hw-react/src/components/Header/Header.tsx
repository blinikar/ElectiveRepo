import React from "react";
import "./Header.css";
import {Link, Outlet} from "react-router-dom";

// not looks like header the component name should be "Layout"
export const Header:React.FunctionComponent = () => {
    return <div>
        <header className="App-header">
            <div className="header">
                <h3 className="label">Yegor Blinov</h3>
                <nav className="menu">
                    <Link className="menu-item" to="/">Portfolio</Link>
                    <Link className="menu-item" to="/contacts">Contacts</Link>
                </nav>
            </div>
        </header>
        <main>
            <Outlet />
        </main>
        <footer className={"footer"}>
            <p><a href={"https://t.me/blinikar"}>Telegram</a> <a href={"https://github.com/blinikar"}>GitHub</a></p>
            <p>
                Made by Yegor Blinov on ReactJS and TypeScript in 2022 for Frontend Web Development elective
                in Innopolis University
            </p>
        </footer>
    </div>
}