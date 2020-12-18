import React from "react";
import { useRoutes, useRedirect } from "hookrouter";
import HealthOfficialProfile from "../components/HealthOfficial/HealthOfficialProfile";

import ConsultationForm from "../components/HealthOfficial/ConsultationForm";
import NavBar from "../components/Navbars/NavBar";

const routes = {
    "/profile": () => <HealthOfficialProfile />,
    "/patient/:id/consultation": ({ id }) => <ConsultationForm id={id} />,
};
const links = [
    {
        link: "/profile",
        title: "Profile",
        icon: "",
    },
    {
        link: "/patient/:id/consultation",
        title: "Create consultation",
        icon: "",
    },
];
const HealthOfficialRouter = () => {
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

export default HealthOfficialRouter;
