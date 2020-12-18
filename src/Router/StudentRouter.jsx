import React from "react";
import { useRoutes, useRedirect } from "hookrouter";
// import LandingPage from "../components/common/LandingPage";
// import Footer from "../components/common/Footer";
import StudentHome from "../components/Student/StudentHome";
import StudentProfile from "../components/Student/StudentProfile";
import NavBar from "../components/Navbars/NavBar";
import StudentRequestList from "../components/Student/StudentRequestList";
import StudentMessageBox from "../components/Student/StudentMessageBox";
const routes = {
    // "/": () => <LandingPage />,
    "/leaveform": () => <StudentHome />,
    "/requests": () => <StudentRequestList />,
    "/requests/:id": ({ id }) => <StudentMessageBox id={id} />,
    "/profile": () => <StudentProfile />,
};
const links = [
    {
        link: "/leaveform",
        title: "Apply Leave",
        icon: "",
    },
    {
        link: "/requests",
        title: "Applied Leaves",
        icon: "",
    },
    {
        link: "/profile",
        title: "Profile",
        icon: "",
    },
];
const StudentRouter = () => {
    useRedirect("/home", "/leaveform");
    useRedirect("/", "/leaveform");
    useRedirect("/login", "/leaveform");
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

export default StudentRouter;
