import React from "react";
import { CATEGORY } from "../../Common/constants";
import { DECISION_AFTER_CONSULTATION } from "../../Common/constants";

function ConsultationForm() {
    // return (
    //     <div className="bg-white max-w-4xl mx-auto p-4">
    //         <div className="mt-2">
    //             <div className="text-xl font-bold my-2">Consultation</div>
    //             <label className="block text-sm text-gray-600" htmlFor="name">
    //                 History
    //             </label>
    //             <input
    //                 className="w-full focus:shadow-outline px-5 py-1 text-gray-700 bg-gray-200 rounded"
    //                 id="hotel-name"
    //                 name="name"
    //                 value=""
    //                 onChange=""
    //                 type="text"
    //                 placeholder="Enter Hotel Name"
    //             />
    //             <div className="text-xs italic text-red-500">{}</div>
    //         </div>
    //     </div>
    // );
    const handleChange = (e) => {
        const { value, name } = e.target;
    };
    const handleSubmit = (e) => {
        const { value, name } = e.target;
    };
    return (
        <div className="leading-loose mx-auto">
            <form
                onSubmit={handleSubmit}
                className="max-w-xl mx-auto m-4 p-10 bg-white rounded shadow-xl">
                <p className="text-gray-800 font-medium text-center">
                    Consultation Form
                </p>

                <div className="mt-2">
                    <label
                        className="block text-sm text-gray-600"
                        htmlFor="address">
                        Symptoms
                    </label>
                    <textarea
                        className="form-textarea focus:shadow-outline w-full px-5 py-1 text-gray-700 border border-gray-400  rounded"
                        id="address"
                        name="address"
                        // value={form.address}
                        onChange={handleChange}
                        type="text"
                        placeholder="Symptoms of the Patient"
                    />
                    <div className="text-xs italic full-width text-red-500">
                        {/* {error.address} */}
                    </div>
                </div>
                <div className="mt-2">
                    <label
                        className="block text-sm text-gray-600"
                        htmlFor="address">
                        Examination Details and Clinical Conditions
                    </label>
                    <textarea
                        className="form-textarea focus:shadow-outline w-full px-5 py-1 text-gray-700 border border-gray-400  rounded"
                        id="address"
                        name="address"
                        // value={form.address}
                        onChange={handleChange}
                        type="text"
                        placeholder="Information Optional"
                    />
                    <div className="text-xs italic full-width text-red-500">
                        {/* {error.address} */}
                    </div>
                </div>
                <div className="mt-2">
                    <label
                        className="block text-sm text-gray-600"
                        htmlFor="address">
                        Treatment Summary
                    </label>
                    <textarea
                        className="form-textarea focus:shadow-outline w-full px-5 py-1 text-gray-700 border border-gray-400  rounded"
                        id="address"
                        name="address"
                        // value={form.address}
                        onChange={handleChange}
                        type="text"
                        placeholder="Information Optional"
                    />
                    <div className="text-xs italic full-width text-red-500">
                        {/* {error.address} */}
                    </div>
                </div>

                <div className="flex justify-between">
                    <div className="w-full md:w-1/2 inline-block mt-2 -mx-1 pl-1">
                        <label
                            className="block text-sm text-gray-600"
                            htmlFor="district">
                            Category
                        </label>
                        <div className="relative">
                            <select
                                className="appearance-none focus:shadow-outline w-full py-1 px-5 py-1 text-gray-700 bg-gray-200 rounded"
                                name="category"
                                // value={form.district}
                                onChange={handleChange}>
                                {CATEGORY.map((el) => (
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
                            Decision after ConsultationForm
                        </label>
                        <div className="relative">
                            <select
                                className="appearance-none focus:shadow-outline w-full py-1 px-5 py-1 text-gray-700 bg-gray-200 rounded"
                                name="decision"
                                // value={form.district}
                                onChange={handleChange}>
                                {DECISION_AFTER_CONSULTATION.map((el) => (
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

                <div className="mt-2">
                    <label
                        className="block text-sm text-gray-600"
                        htmlFor="policy">
                        Advice
                    </label>
                    <textarea
                        className="form-textarea w-full focus:shadow-outline px-5 py-1 text-gray-700 border border-gray-400 rounded"
                        id="policy"
                        name="policy"
                        // value={form.policy}
                        onChange={handleChange}
                        type="text"
                        placeholder="Advices given to patient"
                    />
                    <div className="text-xs italic full-width text-red-500">
                        {/* {error.policy} */}
                    </div>
                </div>
                <div className="mt-2">
                    <label
                        className="block text-sm text-gray-600"
                        htmlFor="policy">
                        Prescription
                    </label>
                    <textarea
                        className="form-textarea w-full focus:shadow-outline px-5 py-1 text-gray-700 border border-gray-400 rounded"
                        id="policy"
                        name="policy"
                        // value={form.policy}
                        onChange={handleChange}
                        type="text"
                        placeholder="Enter the prescription details"
                    />
                    <div className="text-xs italic full-width text-red-500">
                        {/* {error.policy} */}
                    </div>
                </div>
                <div className="mt-2">
                    <label
                        className="block text-sm text-gray-600"
                        htmlFor="policy">
                        Verified By
                    </label>
                    <input
                        className="form-textarea w-full focus:shadow-outline px-5 py-1 text-gray-700 border border-gray-400 rounded"
                        id="policy"
                        name="policy"
                        // value={form.policy}
                        onChange={handleChange}
                        type="text"
                        placeholder="Attending Doctors name and Designation"
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
                {/* <div className="mt-2 flex items-center">
                    <button
                        className={`px-4 py-1 text-white font-bold tracking-wider ${
                            formLoading
                                ? "bg-gray-600 cursor-default"
                                : "bg-indigo-600 hover:bg-indigo-800"
                        } rounded`}
                        type="submit">
                        Submit
                    </button>
                    {formLoading && (
                        <div className="ml-3 text-gray-700 text-sm">
                            Uploading images and submitting data...
                        </div>
                    )}
                </div> */}
            </form>
        </div>
    );
}

export default ConsultationForm;
