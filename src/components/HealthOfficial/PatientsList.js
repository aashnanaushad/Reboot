import React from "react";
import { navigate } from "hookrouter";

export default function PatientsList() {
    const id1 = "5fdde3dc03687514b403b662";
    const id2 = "5fde0de17e7be82634ece924";
    return (
        <div>
            <div className="flex bg-white inline-block m-4 p-6 overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                    <dl>
                        <dt className="text-sm leading-5 font-medium text-gray-500 truncate">
                            Total Patients
                        </dt>
                        <dd className="mt-4 text-5xl leading-9 font-semibold text-gray-900">
                            2
                        </dd>
                    </dl>
                </div>
                <div className="px-4 py-5 sm:p-6">
                    <dl>
                        <dt className="text-sm leading-5 font-medium text-gray-500 truncate">
                            Total Postive Count
                        </dt>
                        <dd className="mt-4 text-5xl leading-9 font-semibold text-gray-900">
                            2
                        </dd>
                    </dl>
                </div>
            </div>

            <div className="max-w-5xl  mx-auto">
                <div className="flex flex-wrap md:-mx-4">
                    <div className="w-full pb-2 cursor-pointer border-b md:flex justify-between items-center mb-3 bg-white">
                        <div className="px-4 md:w-1/2">
                            <div class="md:flex justify-between w-full">
                                <div className="text-xl font-normal capitalize">
                                    Bodhisha Thomas
                                </div>
                            </div>
                            <div className="font-normal text-sm">
                                Facility Type :{"Govt Hosp"}
                                <span className="text-xs ml-2">
                                    Update on : 20-12-2020
                                </span>
                                <span class="m-1 inline-flex items-center px-3 py-1 rounded-full text-xs leading-4 font-semibold rounded p-1 bg-green-400 text-white">
                                    POSITIVE
                                </span>
                            </div>
                        </div>
                        <div class="md:flex">
                            <div class="md:flex flex-wrap justify-end"></div>
                            <div class="px-2">
                                <button
                                    onClick={() => navigate(`/patient/${id1}`)}>
                                    <div class="btn btn-default bg-white">
                                        More Details...
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap md:-mx-4">
                    <div className="w-full pb-2 cursor-pointer border-b md:flex justify-between items-center mb-3 bg-white">
                        <div className="px-4 md:w-1/2">
                            <div class="md:flex justify-between w-full">
                                <div className="text-xl font-normal capitalize">
                                    Saurav E.S.
                                </div>
                            </div>
                            <div className="font-normal text-sm">
                                Facility Type : {"FLTC"}
                                <span className="text-xs ml-2">
                                    Update on : 19-12-2020
                                </span>
                                <span class="m-1 inline-flex items-center px-3 py-1 rounded-full text-xs leading-4 font-semibold rounded p-1 bg-green-400 text-white">
                                    POSITIVE
                                </span>
                            </div>
                        </div>
                        <div class="md:flex">
                            <div class="md:flex flex-wrap justify-end"></div>
                            <div class="px-2">
                                <button
                                    onClick={() => navigate(`/patient/${id2}`)}>
                                    <div class="btn btn-default bg-white">
                                        More Details...
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
