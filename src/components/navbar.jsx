import React from "react";
import { navLinks } from "../constants/nav-links";
import { TaskNavLink } from "./nav-link";

export default function Navbar() {
    return (
        <div className="flex text-gray-700 items-center gap-10 px-10 py-5 justify-center text-xl font-bold">
            {navLinks.map(navLink => <TaskNavLink key={navLink.title} navLink={navLink} />)}
        </div>
    )
}