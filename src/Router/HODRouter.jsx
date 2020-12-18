import React from "react";
import { useRoutes, useRedirect } from "hookrouter";
import Footer from "../components/common/Footer";
import NavBar from "../components/Navbars/NavBar";
import HODProfile from "../components/HOD/HODProfile";

const routes = {
    "/profile": () => <HODProfile />,
};
const links = [
    {
        link: "/requests",
        title: "RequestList",
        icon: "",
    },
    {
        link: "/profile",
        title: "Profile",
        icon: "",
    },
];
const HODRouter = () => {
    useRedirect("/login", "/requests");
    useRedirect("/", "/requests");
    useRedirect("/home", "/requests");
    const pages = useRoutes(routes);

    return (
        <div className="">
            {/* <HODNavbar /> */}

            {!pages ? (
                <div className="h-screen flex justify-center py-16">
                    Error 404: Page not found
                </div>
            ) : (
                    <NavBar pages={pages} menus={links} />
                )}
            {/* <Footer /> */}
        </div>
    );
};

export default HODRouter;
