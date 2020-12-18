import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getStudentLeaveDetails, getGatePassId } from "../../Redux/actions";

function StudentMessageBox({ id }) {
    const dispatch = useDispatch();
    const [details, setdetails] = useState(false);
    const [loading, setloading] = useState(true);
    const [qrloading, setqrloading] = useState(true);
    const [showQr, setShowQr] = useState(false);
    const [gatePassId, setgatePassId] = useState(" ");
    const genrateQrcode = (id) => {
        setShowQr(true);
        dispatch(getGatePassId(id)).then((res) => {
            if (res && res.data && res.status === 200) {
                setgatePassId(res.data.data);
                setqrloading(false);
            }
            setloading(false);
        });
    };
    function toggleQr() {
        setShowQr(!showQr);
    }
    useEffect(() => {
        dispatch(getStudentLeaveDetails(id)).then((res) => {
            if (res && res.data && res.status === 200) {
                setdetails(res.data);
            }
            setloading(false);
        });
    }, []);
    return (
        <div className=" flex flex-col w-full">hI</div>
    );
}

export default StudentMessageBox;
