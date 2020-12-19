import React from "react";
import { useRoutes, useRedirect } from "hookrouter";
import FacilityProfile from "../components/DistrictAdmin/DistrictAdminProfile";
import CreateFacility from "../components/DistrictAdmin/CreateFacility.js";
import Facility from "../components/DistrictAdmin/Facility";
import FacilityView from "../components/DistrictAdmin/FacilityView";
import NavBar from "../components/Navbars/NavBar";

const routes = {
    "/profile": () => <FacilityProfile />,
    "/createfacility": () => <CreateFacility />,
    "/facilities": () => <Facility />,
    "/facility/:id": ({ id }) => <FacilityView id={id} />,
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
