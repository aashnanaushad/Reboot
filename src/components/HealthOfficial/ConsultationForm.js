import React, { useState } from "react";
import { CATEGORY } from "../../Common/constants";
import { DECISION_AFTER_CONSULTATION } from "../../Common/constants";
import { useDispatch } from "react-redux";
import { createConsultation } from "../../Redux/actions";
import * as Notficiation from "../../util/Notifications";

function ConsultationForm() {
    const dispatch = useDispatch();
    const initForm = {
        patientId: "",
        symptom: "",
        examinationDetail: "",
        treatmentSummary: "",
        category: "",
        decision: "",
        advice: "",
        prescription: "",
        verifiedBy: "",
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
        const form1 = {
            patientId: "5fdde3dc03687514b403b662",
            symptom: form.symptom,
            examinationDetail: form.examinationDetail,
            treatmentSummary: form.treatmentSummary,
            category: form.category,
            decision: form.decision,
            advice: form.advice,
            prescription: form.prescription,
            verifiedBy: "healthofficial",
        };

        dispatch(createConsultation(form1)).then((res) => {
            if (
                res &&
                res.statusCode !== 400 &&
                res.statusCode !== 401 &&
                res.statusCode !== 404 &&
                res.statusCode !== 500
            ) {
                Notficiation.Success({
                    msg: "Consultation Submitted Successfully",
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
            <form className="max-w-xl mx-auto m-4 p-10 bg-white rounded shadow-xl">
                <p className="text-gray-800 font-medium text-center">
                    Consultation Form
                </p>

                <div className="mt-2">
                    <label
                        className="block text-sm text-gray-600"
                        htmlFor="symptom">
                        Symptoms
                    </label>
                    <textarea
                        className="form-textarea focus:shadow-outline w-full px-5 py-1 text-gray-700 border border-gray-400  rounded"
                        id="symptom"
                        name="symptom"
                        value={form.symptom}
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
                        htmlFor="examinationDetail">
                        Examination Details and Clinical Conditions
                    </label>
                    <textarea
                        className="form-textarea focus:shadow-outline w-full px-5 py-1 text-gray-700 border border-gray-400  rounded"
                        id="examinationDetail"
                        name="examinationDetail"
                        value={form.examinationDetail}
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
                        htmlFor="treatmentSummary">
                        Treatment Summary
                    </label>
                    <textarea
                        className="form-textarea focus:shadow-outline w-full px-5 py-1 text-gray-700 border border-gray-400  rounded"
                        id="treatmentSummary"
                        name="treatmentSummary"
                        value={form.treatmentSummary}
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
                            htmlFor="category">
                            Category
                        </label>
                        <div className="relative">
                            <select
                                className="appearance-none focus:shadow-outline w-full py-1 px-5 py-1 text-gray-700 bg-gray-200 rounded"
                                name="category"
                                id="category"
                                value={form.category}
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
                                id="decision"
                                value={form.decision}
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
                        id="advice"
                        name="advice"
                        value={form.advice}
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
                        id="prescription"
                        name="prescription"
                        value={form.prescription}
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
                        id="verifiedBy"
                        name="verifiedBy"
                        value={form.verifiedBy}
                        onChange={handleChange}
                        type="text"
                        placeholder="Attending Doctors name and Designation"
                    />
                    <div className="text-xs italic full-width text-red-500">
                        {/* {error.policy} */}
                    </div>
                </div>

                {/* <div className="h-10">
                    <p className="text-red-500 text-xs italic bold text-center mt-2">
                        {/* {formError} */}
                {/* </p> */}
                {/* </div> */}
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

export default ConsultationForm;
