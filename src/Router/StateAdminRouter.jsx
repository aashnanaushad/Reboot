import React from "react";
import NavBar from "../components/Navbars/NavBar";
import { useRoutes, useRedirect } from "hookrouter";
import CreateFacility from "../components/Admin/CreateFacility.js";
import Facility from "../components/Admin/Facility";
import FacilityView from "../components/Admin/FacilityView";
import FacilityProfile from "../components/Admin/FacilityView";

const routes = {
    "/createfacility": () => <CreateFacility />,
    "/facilities": () => <Facility />,
    "/facility/:id": ({ id }) => <FacilityView id={id} />,
    "/profile": () => <FacilityProfile />,
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
    {
        link: "/facilities",
        title: "Facilities",
        icon: "",
    },
];
const StateAdminRouter = () => {
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

export default StateAdminRouter;
