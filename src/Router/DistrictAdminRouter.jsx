import React from "react";
import { useRoutes, useRedirect } from "hookrouter";
import FacultyProfile from "../components/DistrictAdmin/DistrictAdminProfile";
import CreateFacility from "../components/DistrictAdmin/CreateFacility.js";
import NavBar from "../components/Navbars/NavBar";

const routes = {
    "/profile": () => <FacultyProfile />,
    "/createfacility": () => <CreateFacility />
};
const links = [
    {
        link: "/profile",
        title: "Profile",
        icon: "",
    },
    {
        link: "/createfacility",
        title: "Create Facility",
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