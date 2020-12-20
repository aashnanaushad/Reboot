import React from "react";
import { useRoutes, useRedirect } from "hookrouter";
import NavBar from "../components/Navbars/NavBar";
import PatientProfile from "../components/Patient/PatientProfile";
import UpdateDataByUser from "../components/Patient/UpdateDataByUser";
const routes = {
    "/patients": () => <PatientProfile />,
    "/addData": () => <UpdateDataByUser />,
};
const links = [
    {
        link: "/patients",
        title: "Profile",
        icon: "",
    },
    {
        link: "/addData",
        title: "Add Oximeter Data",
        icon: "",
    },
];
const PatientRouter = () => {
    useRedirect("/home", "/patients");
    useRedirect("/", "/patients");
    useRedirect("/login", "/patients");
    const pages = useRoutes(routes);

    return (
        <div className="">
            {!pages ? (
                <div className="">Error 404: Page not found</div>
            ) : (
                <NavBar pages={pages} menus={links} />
            )}
            {/* <Footer /> */}
        </div>
    );
};

export default PatientRouter;
