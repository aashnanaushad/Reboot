import React from "react";
import { useRoutes, useRedirect } from "hookrouter";

import NavBar from "../components/Navbars/NavBar";
import Profile from "../components/Laboratory/Profile"

const routes = {
    "/profile": () => <Profile />,

};
const links = [
    {
        link: "/profile",
        title: "Profile",
        icon: "",
    },
];
const DistrictAdminRouter = () => {
    useRedirect("/login", "/profile");
    useRedirect("/", "/profile");
    useRedirect("/home", "/profile");
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

export default DistrictAdminRouter;