import React from "react";

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
            </section>
        </div>
    );
}
