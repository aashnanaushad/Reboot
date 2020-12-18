import React from "react";
import { useRoutes, useRedirect } from "hookrouter";
import NavBar from "../components/Navbars/NavBar";
import AdminProfile from "../components/Admin/AdminProfile";

const routes = {
    "/profile": () => <AdminProfile />,
};
const links = [
    {
        link: "/requests",
        title: "Requests",
        icon: "",
    },
    {
        link: "/holidays",
        title: "Holidays",
        icon: "",
    },
    {
        link: "/profile",
        title: "Profile",
        icon: "",
    },
];
const AdminRouter = () => {
    useRedirect("/home", "/requests");
    useRedirect("/login", "/requests");
    useRedirect("/", "/requests");
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

export default AdminRouter;
