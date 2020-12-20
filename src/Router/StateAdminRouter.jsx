import React from "react";
import NavBar from "../components/Navbars/NavBar";
import { useRoutes, useRedirect } from "hookrouter";
import CreateFacility from "../components/Admin/CreateFacility.js";
import Facility from "../components/Admin/Facility";
import FacilityView from "../components/Admin/FacilityView";
import FacilityProfile from "../components/Admin/FacilityView";
import CreateLaboratory from "../components/Admin/CreateLaboratory";

const routes = {
    "/createfacility": () => <CreateFacility />,
    "/facilities": () => <Facility />,
    "/facility/:id": ({ id }) => <FacilityView id={id} />,
    "/facilityprofile": () => <FacilityProfile />,
    "/createlaboratory": () => <CreateLaboratory />,
};
const links = [
    {
        link: "/facilities",
        title: "Facilities",
        icon: "",
    },
    {
        link: "/createfacility",
        title: "Create Facility",
        icon: "",
    },
    {
        link: "/createlaboratory",
        title: "Create Laboratory",
        icon: "",
    },

];
const StateAdminRouter = () => {
    useRedirect("/login", "/facilities");
    useRedirect("/", "/facilities");
    useRedirect("/home", "/facilities");
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
