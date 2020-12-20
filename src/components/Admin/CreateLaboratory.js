import React, { useState } from "react";
import {
    DISTRICT_CHOICES,
    STATE,
    FACILITY_TYPES,
} from "../../Common/constants";
import { useDispatch } from "react-redux";
import { createLab } from "../../Redux/actions";
import * as Notficiation from "../../util/Notifications";

const CreateLaboratory = () => {
    const dispatch = useDispatch();
    const initForm = {
        facilityType: "laboratory",
        facilityName: "",
        address: "",
        state: "",
        district: "",
        localBody: "",
        ward: "",
        pincode: "",
        contact: "",
        oxygenCapacity: "",
        latitude: "",
        longitude: "",
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

        dispatch(createLab(form)).then((res) => {
            if (
                res &&
                res.statusCode !== 400 &&
                res.statusCode !== 401 &&
                res.statusCode !== 404 &&
                res.statusCode !== 500
            ) {
                Notficiation.Success({
                    msg: "Laboratory added Successfully",
                });
                window.location.reload();
            } else {
                Notficiation.Error({
                    msg: "Something went wrong",
                });
                window.location.reload();
            }
        });
    };
    return (
        <div className="leading-loose mx-auto">
            <form
                onSubmit={handleSubmit}
                className="max-w-xl mx-auto m-4 p-10 bg-white rounded shadow-xl">
                <p className="text-gray-800 font-medium text-center">
                    Create Laboratory
                </p>
                <div className="mt-2">
                    <label
                        className="block text-sm text-gray-600"
                        htmlFor="address">
                        Laboratory Name *
                    </label>
                    <input
                        className="form-textarea focus:shadow-outline w-full px-5 py-1 text-gray-700 border border-gray-400  rounded"
                        id="facilityName"
                        name="facilityName"
                        value={form.facilityName}
                        onChange={handleChange}
                        type="text"
                        placeholder="Name of Facility"
                    />
                    <div className="text-xs italic full-width text-red-500">
                        {/* {error.address} */}
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="w-full md:w-1/2 inline-block mt-2 -mx-1 pl-1">
                        <label
                            className="block text-sm text-gray-600"
                            htmlFor="state">
                            State*
                        </label>
                        <div className="relative">
                            <select
                                className="appearance-none focus:shadow-outline w-full py-1 px-5 py-1 text-gray-700 bg-gray-200 rounded"
                                name="state"
                                // value={form.district}
                                onChange={handleChange}>
                                {STATE.map((el) => (
                                    <option value={el.text} key={el.text}>
                                        {el.text}
                                    </option>
                                ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg
                                    className="fill-current h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 inline-block mt-2 -mx-1 pl-1">
                        <label
                            className="block text-sm text-gray-600"
                            htmlFor="district">
                            District*
                        </label>
                        <div className="relative">
                            <select
                                className="appearance-none focus:shadow-outline w-full py-1 px-5 py-1 text-gray-700 bg-gray-200 rounded"
                                name="district"
                                value={form.district}
                                onChange={handleChange}>
                                {DISTRICT_CHOICES.map((el) => (
                                    <option value={el.text} key={el.text}>
                                        {el.text}
                                    </option>
                                ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg
                                    className="fill-current h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="mt-2 mr-2">
                        <label
                            className="block text-sm text-gray-600"
                            htmlFor="address">
                            Local Body *
                        </label>
                        <input
                            className="form-textarea focus:shadow-outline w-full  px-5 py-1 text-gray-700 border border-gray-400  rounded"
                            id="localBody"
                            name="localBody"
                            value={form.localBody}
                            onChange={handleChange}
                            type="text"
                            placeholder="Local Body "
                        />
                        <div className="text-xs italic full-width text-red-500">
                            {/* {error.address} */}
                        </div>
                    </div>
                    <div className="mt-2 ">
                        <label
                            className="block text-sm text-gray-600"
                            htmlFor="ward">
                            Ward*
                        </label>
                        <input
                            className="form-textarea focus:shadow-outline  w-full px-5 py-1 text-gray-700 border border-gray-400  rounded"
                            id="ward"
                            name="ward"
                            value={form.ward}
                            onChange={handleChange}
                            type="text"
                            placeholder="Ward"
                        />
                        <div className="text-xs italic full-width text-red-500">
                            {/* {error.address} */}
                        </div>
                    </div>
                </div>
                <div className="mt-2">
                    <label
                        className="block text-sm text-gray-600"
                        htmlFor="address">
                        Address
                    </label>
                    <textarea
                        className="form-textarea focus:shadow-outline w-full px-5 py-1 text-gray-700 border border-gray-400  rounded"
                        id="address"
                        name="address"
                        value={form.address}
                        onChange={handleChange}
                        type="text"
                        placeholder="Address"
                    />
                    <div className="text-xs italic full-width text-red-500">
                        {/* {error.address} */}
                    </div>
                </div>
                <div className="mt-2">
                    <label
                        className="block text-sm text-gray-600"
                        htmlFor="pincode">
                        Pincode
                    </label>
                    <input
                        className="form-textarea focus:shadow-outline w-full px-5 py-1 text-gray-700 border border-gray-400  rounded"
                        id="pincode"
                        name="pincode"
                        value={form.pincode}
                        onChange={handleChange}
                        type="text"
                        placeholder="Pincode"
                    />
                    <div className="text-xs italic full-width text-red-500">
                        {/* {error.address} */}
                    </div>
                </div>

                <div className="mt-2">
                    <label
                        className="block text-sm text-gray-600"
                        htmlFor="policy">
                        Contact Number
                    </label>
                    <input
                        className="form-textarea w-full focus:shadow-outline px-5 py-1 text-gray-700 border border-gray-400 rounded"
                        id="contact"
                        name="contact"
                        value={form.contact}
                        onChange={handleChange}
                        type="text"
                        placeholder="Contact Number"
                    />
                    <div className="text-xs italic full-width text-red-500">
                        {/* {error.policy} */}
                    </div>
                </div>

                <div className="h-10">
                    <p className="text-red-500 text-xs italic bold text-center mt-2">
                        {/* {formError} */}
                    </p>
                </div>
                <div className="mt-1 flex items-center">
                    <button
                        className="px-4 py-1 w-full text-white font-bold tracking-wider bg-red-800 cursor-default"
                        onClick={handleSubmit}
                        type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateLaboratory;
