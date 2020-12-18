import React from "react";
import { useRoutes, useRedirect } from "hookrouter";
// import LandingPage from "../components/common/LandingPage";
// import Footer from "../components/common/Footer";
import NavBar from "../components/Navbars/NavBar";
import ConsultationForm from "../components/Patient/ConsultationForm";
import PatientProfile from "../components/Patient/PatientProfile";
const routes = {
    // "/": () => <LandingPage />,
    // "/leaveform": () => <PatientsHome />,
    // "/cons": () => <PatientsHome />,
    "/patient/:id/consultation": ({ id }) => <ConsultationForm id={id} />,
    "/patients": () => <PatientProfile />,
};
const links = [
    {
        link: "/patient",
        title: "Create consultation",
        icon: "",
    },
    {
        link: "/patient",
        title: "Update Details",
        icon: "",
    },
    {
        link: "/profile",
        title: "Profile",
        icon: "",
    },
];
const PatientRouter = () => {
    useRedirect("/home", "/patient");
    useRedirect("/", "/patient");
    useRedirect("/login", "/patient");
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
