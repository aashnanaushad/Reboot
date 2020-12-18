import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const StudentProfile = () => {
    const state = useSelector((reduxState) => reduxState);
    const { currentUser } = state;
    const [details, setDetails] = useState("");
    useEffect(() => {
        setDetails(currentUser.data.data)
    }, []);
    return (
        <div className="flex  w-full max-w-4xl mx-auto px-1 fadeIn">
            hello
        </div>
    );
};

export default StudentProfile;
