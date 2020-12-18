import React, { useEffect, useState } from "react";
import { A, navigate } from "hookrouter";
import { useSelector } from "react-redux";
function LandingPage() {
    const state = useSelector((reduxState) => reduxState);
    const { currentUser } = state;
    const [type, setType] = useState("student/loginStudent");
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    // return <div className="">Landing Page</div>;
    return (
        // <div className="h-screen pb-14 bg-right bg-cover" >

        <div className=" mt-4 sm:mt-24 pl-6 md:pl-12 lg-pl-24 pr-6 mx-auto flex flex-wrap">
            <div className="flex flex-wrap w-full md:w-2/3">
                <h1 className="  w-full my-4 text-3xl md:text-5xl text-red-700 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">
                    Pandemic Handler
                </h1>
                <div className="flex ">
                    <p className="w-full leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">
                        An end to end Pandemic handling system
                    </p>
                </div>
            </div>

            <div className="flex flex-wrap w-full md:w-1/3 ">
                <div className="flex flex-wrap ml-auto">
                    <div className="flex w-full">
                        <button
                            onClick={() => navigate("/login")}
                            className="mx-auto md:mr-0 my-2 text-white px-8 w-full max-w-sm  h-12 bg-red-600 rounded-full hover:bg-red-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none ">
                            <span> &gt; Authorized Login</span>
                        </button>
                    </div>
                    <br />
                </div>
            </div>
        </div>
        // </div >
    );
}

export default LandingPage;
