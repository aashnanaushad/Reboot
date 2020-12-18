import React from "react";
import { useRoutes, useRedirect } from "hookrouter";
import PoliceProfile from "../components/Police/PoliceProfile";
import NavBar from "../components/Navbars/NavBar";

const routes = {
    "/profile": () => <PoliceProfile />
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
