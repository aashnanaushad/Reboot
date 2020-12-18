import React from "react";
import { useRoutes, useRedirect } from "hookrouter";
import FacultyProfile from "../components/Faculty/FacultyProfile";
import NavBar from "../components/Navbars/NavBar";

const routes = {
    "/profile": () => <FacultyProfile />,
};
const links = [
    {
        link: "/requests",
        title: "Requests",
        icon: "",
    },

    {
        link: "/profile",
        title: "Profile",
        icon: "",
    },
];
const FacilitatorRouter = () => {
    useRedirect("/login", "/requests");
    useRedirect("/", "/requests");
    useRedirect("/home", "/requests");
    const pages = useRoutes(routes);

    return (
        <div className="">
            {!pages ? (
                <div className="">Error 404: Page not found</div>
            ) : (
                    <NavBar pages={pages} menus={links} />
                )}

        </div>
    );
};

export default FacilitatorRouter;
