import { navigate } from "hookrouter";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createConsultation } from "../../Redux/actions";
import * as Notficiation from "../../util/Notifications";

export default function UpdateDataByUser() {
    const dispatch = useDispatch();
    const id1 = "5fdde3dc03687514b403b662";
    const initForm = {
        spo2: "",
        pulseRate: "",
    };
    const [form, setForm] = useState(initForm);
    const handleChange = (e) => {
        const { value, name } = e.target;
        const fieldValue = { ...form };
        fieldValue[name] = value;
        setForm(fieldValue);
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        // dispatch(createConsultation(form)).then((res) => {
        //     if (
        //         res &&
        //         res.statusCode !== 400 &&
        //         res.statusCode !== 401 &&
        //         res.statusCode !== 404 &&
        //         res.statusCode !== 500
        //     ) {
        //         Notficiation.Success({
        //             msg: "Data Submitted Successfully",
        //         });

        //         window.location.reload();
        //     } else {
        //         Notficiation.Error({
        //             msg: "Something went wrong",
        //         });
        //         window.location.reload();
        //     }
        // });
        Notficiation.Success({
            msg: "Data Submitted Successfully",
        });
        navigate("/");
    };
    return (
        <div className="leading-loose mx-auto">
            <form className="max-w-xl mx-auto m-4 p-10 bg-white rounded shadow-xl">
                <p className="text-gray-800 font-medium text-center">
                    Add Pulse Oximeter Details
                </p>

                <div className="mt-2">
                    <label
                        className="block text-sm text-gray-600"
                        htmlFor="sp02">
                        pulseRate
                    </label>
                    <input
                        className="form-textarea focus:shadow-outline w-full px-5 py-1 text-gray-700 border border-gray-400  rounded"
                        id="pulseRate"
                        name="pulseRate"
                        value={form.pulseRate}
                        onChange={handleChange}
                        type="number"
                        placeholder="Enter the pulse Rate "
                    />
                    <div className="text-xs italic full-width text-red-500">
                        {/* {error.address} */}
                    </div>
                </div>
                <div className="mt-2">
                    <label
                        className="block text-sm text-gray-600"
                        htmlFor="sp02">
                        spO2 Count
                    </label>
                    <input
                        className="form-textarea focus:shadow-outline w-full px-5 py-1 text-gray-700 border border-gray-400  rounded"
                        id="sp02"
                        name="sp02"
                        value={form.sp02}
                        onChange={handleChange}
                        type="number"
                        placeholder="sp02 Count"
                    />
                    <div className="text-xs italic full-width text-red-500">
                        {/* {error.address} */}
                    </div>
                </div>

                <div className="flex">
                    <input
                        type="submit"
                        value="Submit"
                        onClick={handleSubmit}
                        className="w-64 mx-auto mt-6 bg-red-600 hover:bg-red-700 text-white font-semibold p-3"
                    />
                </div>
            </form>
        </div>
    );
}
