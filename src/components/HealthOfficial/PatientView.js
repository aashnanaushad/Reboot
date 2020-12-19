import React from "react";
import { navigate } from "hookrouter";

export default function PatientView() {
    return (
        <div>
            <div className="font-bold text-3xl text-red-800 ml-2">
                Suspect Details
            </div>
            <section className="md:flex mt-4">
                <div className="md:w-2/3 mx-2">
                    <div class="bg-white rounded-lg shadow p-4 h-full">
                        <div class="font-bold m-2 py-1 text-2xl">
                            Bodhisha Thomas
                        </div>
                        <h3 class="font-semibold  text-lg">
                            {" "}
                            <i
                                class="fas fa-hospital mr-2 m-2 text-xl text-red-400"
                                aria-hidden="true"></i>
                            Govt Hosp
                        </h3>
                        <div className="grid grid-cols-1 gap-x-4 gap-y-2 m-2 md:gap-y-8 sm:grid-cols-3 mt-2">
                            <div className="sm:col-span-1">
                                <div className="text-sm py-2  leading-5 font-medium text-gray-500">
                                    Date of Birth, Gender
                                </div>
                                <div className="mt-1 text-sm py-2  leading-5 text-gray-900">
                                    09/04/1999, Female
                                </div>
                            </div>
                            <div className="sm:col-span-1">
                                <div className="text-sm py-2  leading-5 font-medium text-gray-500">
                                    Phone
                                </div>
                                <div className="mt-1 text-sm  py-2  leading-5 text-gray-900">
                                    9568451265
                                </div>
                            </div>
                            <div className="sm:col-span-1">
                                <div className="text-sm py-2  leading-5 font-medium text-gray-500">
                                    Phone
                                </div>
                                <div className="mt-1 text-sm py-2  leading-5 text-gray-900">
                                    9568451265
                                </div>
                            </div>
                            <div className="flex flex-wrap mt-2">
                                <span className="m-1 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium leading-4 bg-gray-100 text-gray-700">
                                    <i
                                        class="mr-2 text-md p-1 text-green-500 fas fa-lock"
                                        aria-hidden="true">
                                        Suspect/positive or aaaaaa
                                    </i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/3 mx-2">
                    <div
                        id="actions"
                        className="space-y-2 mt-2 flex-col justify-between flex h-full">
                        <div>
                            <div className="p-2 bg-white rounded-lg shadow text-center">
                                <div className="flex justify-between">
                                    <div className="w-1/2 border-r-2">
                                        <div className="text-sm leading-5 font-medium text-gray-500">
                                            Disease Status
                                        </div>
                                        <div className="mt-1 text-xl font-semibold leading-5 text-gray-900">
                                            POSITIVE
                                        </div>
                                    </div>
                                    <div className="w-1/2">
                                        <div className="text-sm leading-5 font-medium text-gray-500">
                                            Status
                                        </div>
                                        <div className="mt-1 text-xl font-semibold leading-5 text-gray-900">
                                            LIVE
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between p-2 bg-white rounded-lg shadow px-4 mt-2">
                                <div className="w-1/2">
                                    <div className="text-sm leading-5 font-medium text-gray-500">
                                        Created
                                    </div>
                                    <div className="mt-1 text-sm leading-5 text-gray-900 whitespace-pre">
                                        <div className="text-sm">
                                            Created by
                                        </div>
                                        <div className="text-xs">
                                            time of creation
                                        </div>
                                    </div>
                                </div>
                                <div className="w-1/2">
                                    <div className="text-sm leading-5 font-medium text-gray-500">
                                        Last Edited
                                    </div>
                                    <div className="mt-1 text-sm leading-5 text-gray-900 whitespace-pre">
                                        <div className="text-sm">
                                            edited person
                                        </div>
                                        <div className="text-xs">time</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-2 py-2">
                            <div>
                                <button className="inline-flex items-center justify-center whitespace-no-wrap text-sm font-semibold py-2 px-4 bg-red-700 text-white rounded cursor-pointer w-full">
                                    <i className="fas fa-pencil-alt mr-2" />
                                    Update Patient Details
                                </button>
                            </div>
                            <div>
                                <button
                                    onClick={navigate(
                                        "/patient/:id/consultation"
                                    )}
                                    className="inline-flex items-center justify-center whitespace-no-wrap text-sm font-semibold py-2 px-4 bg-red-700 text-white rounded cursor-pointer w-full">
                                    <i className="fas fa-plus-square mr-2" />
                                    Add Consultation
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
