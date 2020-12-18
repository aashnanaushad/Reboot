import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const FacultyProfile = () => {
    const state = useSelector((reduxState) => reduxState);
    const { currentUser } = state;
    const [details, setDetails] = useState("");
    useEffect(() => {
        setDetails(currentUser.data.data);
    }, []);
    return (
        <div className="flex  w-full max-w-4xl mx-auto px-1 fadeIn">
            <div className="flex w-full leading-loose mx-auto">
                <div className="form bg-white p-6 my-2  w-full mx-auto">
                    <h3 className="text-2xl text-gray-900 font-semibold">
                        {details.userId} [ {details.name} ]
                    </h3>
                    <br />
                    <div className="text-gray-600">
                        <div className="mb-4">
                            <h4 className="text-1xl block text-black text-sm font-bold mb-2" >
                                Personal Details:
						    </h4>
                            <p className="text-gray-700 text-base">Name: {details.name}</p>
                            <p className="text-gray-700 text-base">Email: {details.email}</p>
                            <p className="text-gray-700 text-base">Gender: {details.gender}</p>
                            <p className="text-gray-700 text-base">Mobile: {details.mobile}</p>
                        </div>
                    </div>
                    <br />
                    <div className="text-gray-600">
                        <div className="mb-4">
                            <h4 className="text-1xl block text-black text-sm font-bold mb-2" >
                                Professional Details:
						    </h4>
                            <p className="text-gray-700 text-base">College ID: {details.userId}</p>
                            <p className="text-gray-700 text-base">Branch: {details.branch}</p>
                            <p className="text-gray-700 text-base">Semester: {details.semester}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FacultyProfile;