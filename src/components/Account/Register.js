import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postRegister } from "../../Redux/actions";
import * as Notficiation from "../../util/Notifications";

function Register() {
    const dispatch = useDispatch();
    const initForm = {
        userName: "",
        dob: "",
        password: "",
        confirm: "",
        phoneNumber: "",
        state: "",
        ward: "",
        district: "",
        localBody: "",
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
        dispatch(postRegister(form)).then((res) => {
            if (
                res &&
                res.statusCode !== 400 &&
                res.statusCode !== 401 &&
                res.statusCode !== 404 &&
                res.statusCode !== 500
            ) {
                Notficiation.Success({
                    msg: "Registration Request Successfull",
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
                    Registration Form
                </p>

                <div className="mt-2">
                    <label
                        className="block text-sm text-gray-600"
                        htmlFor="userName">
                        Name
                    </label>
                    <input
                        className="form-textarea focus:shadow-outline w-full px-5 py-1 text-gray-700 border border-gray-400  rounded"
                        id="userName"
                        name="userName"
                        value={form.userName}
                        onChange={handleChange}
                        type="text"
                        placeholder="ABCD"
                    />
                </div>
                <div className="mt-2">
                    <label
                        className="block text-sm text-gray-600"
                        htmlFor="examinationDetail">
                        DOB
                    </label>
                    <input
                        className="form-textarea focus:shadow-outline w-full px-5 py-1 text-gray-700 border border-gray-400  rounded"
                        id="dob"
                        name="dob"
                        value={form.dob}
                        onChange={handleChange}
                        type="text"
                        placeholder="DD-MM-YYYY"
                    />
                </div>
                <div className="mt-2">
                    <label
                        className="block text-sm text-gray-600"
                        htmlFor="treatmentSummary">
                        Password
                    </label>
                    <input
                        className="form-textarea focus:shadow-outline w-full px-5 py-1 text-gray-700 border border-gray-400  rounded"
                        id="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        type="password"
                        placeholder="*****"
                    />
                </div>
                <div className="mt-2">
                    <label
                        className="block text-sm text-gray-600"
                        htmlFor="confirm">
                        Confirm Password
                    </label>
                    <input
                        className="form-textarea focus:shadow-outline w-full px-5 py-1 text-gray-700 border border-gray-400  rounded"
                        id="confirm"
                        name="confirm"
                        value={form.confirm}
                        onChange={handleChange}
                        type="password"
                        placeholder="*****"
                    />
                </div>
                <div className="mt-2">
                    <label
                        className="block text-sm text-gray-600"
                        htmlFor="phoneNumber">
                        Phone Number
                    </label>
                    <input
                        className="form-textarea focus:shadow-outline w-full px-5 py-1 text-gray-700 border border-gray-400  rounded"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={form.phoneNumber}
                        onChange={handleChange}
                        type="text"
                        placeholder="0000000000"
                    />
                </div>
                <div className="mt-2">
                    <label
                        className="block text-sm text-gray-600"
                        htmlFor="ward">
                        Ward
                    </label>
                    <input
                        className="form-textarea focus:shadow-outline w-full px-5 py-1 text-gray-700 border border-gray-400  rounded"
                        id="ward"
                        name="ward"
                        value={form.ward}
                        onChange={handleChange}
                        type="text"
                        placeholder="000"
                    />
                </div>
                <div className="mt-2">
                    <label
                        className="block text-sm text-gray-600"
                        htmlFor="localBody">
                        local Body
                    </label>
                    <input
                        className="form-textarea w-full focus:shadow-outline px-5 py-1 text-gray-700 border border-gray-400 rounded"
                        id="localBody"
                        name="localBody"
                        value={form.localBody}
                        onChange={handleChange}
                        type="text"
                        placeholder="xyz"
                    />
                </div>
                <div className="mt-2">
                    <label
                        className="block text-sm text-gray-600"
                        htmlFor="district">
                        District
                    </label>
                    <input
                        className="form-textarea w-full focus:shadow-outline px-5 py-1 text-gray-700 border border-gray-400 rounded"
                        id="district"
                        name="district"
                        value={form.district}
                        onChange={handleChange}
                        type="text"
                        placeholder="pqr"
                    />
                </div>
                <div className="mt-2">
                    <label
                        className="block text-sm text-gray-600"
                        htmlFor="localBody">
                        State
                    </label>
                    <input
                        className="form-textarea w-full focus:shadow-outline px-5 py-1 text-gray-700 border border-gray-400 rounded"
                        id="state"
                        name="state"
                        value={form.state}
                        onChange={handleChange}
                        type="text"
                        placeholder="xyz"
                    />
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

export default Register;
