import React from "react";

export default function PatientsList() {
    return (
        <div>
            <div className="bg-white inline-block m-4 p-6 overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                    <dl>
                        <dt className="text-sm leading-5 font-medium text-gray-500 truncate">
                            Total Patients
                        </dt>
                        <dd className="mt-4 text-5xl leading-9 font-semibold text-gray-900">
                            392
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
                                    Name Full
                                </div>
                            </div>
                            <div className="font-normal text-sm">
                                Facility Name ,{" "}
                                <span className="text-xs ml-2">
                                    Update at : time
                                </span>
                                <span class="m-1 inline-flex items-center px-3 py-1 rounded-full text-xs leading-4 font-semibold rounded p-1 bg-red-400 text-white">
                                    bla bla bla
                                </span>
                            </div>
                        </div>
                        <div class="md:flex">
                            <div class="md:flex flex-wrap justify-end">
                                <span class="m-1 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium leading-4 bg-gray-100 text-gray-700">
                                    Positive
                                </span>
                            </div>
                            <div class="px-2">
                                <div class="btn btn-default bg-white">
                                    Details
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap md:-mx-4">
                    <div className="w-full pb-2 cursor-pointer border-b md:flex justify-between items-center mb-3 bg-white">
                        <div className="px-4 md:w-1/2">
                            <div class="md:flex justify-between w-full">
                                <div className="text-xl font-normal capitalize">
                                    Name Full
                                </div>
                            </div>
                            <div className="font-normal text-sm">
                                Facility Name ,{" "}
                                <span className="text-xs ml-2">
                                    Update at : time
                                </span>
                                <span class="m-1 inline-flex items-center px-3 py-1 rounded-full text-xs leading-4 font-semibold rounded p-1 bg-red-400 text-white">
                                    bla bla bla
                                </span>
                            </div>
                        </div>
                        <div class="md:flex">
                            <div class="md:flex flex-wrap justify-end">
                                <span class="m-1 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium leading-4 bg-gray-100 text-gray-700">
                                    Poitive
                                </span>
                            </div>
                            <div class="px-2">
                                <div class="btn btn-default bg-white">
                                    Details
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
