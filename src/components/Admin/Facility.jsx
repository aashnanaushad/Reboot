import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllFacilities } from "../../Redux/actions";

export default function Facility() {
    const dispatch = useDispatch();
    const [facilities, setFacilities] = useState([]);
    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(getAllFacilities()).then((res) => {
            console.log(res.data);
        });
    });

    return (
        <div>
            <div className="max-w-3xl mx-auto flex justify-around">
                <div className="bg-white hover:bg-gray-300 inline-block m-4 p-6 overflow-hidden shadow rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                        <dl>
                            <dt className="text-sm leading-5 font-medium text-gray-500 truncate">
                                Total Facilities
                            </dt>
                            <dd className="mt-4 text-5xl leading-9 font-semibold text-gray-900">
                                392
                            </dd>
                        </dl>
                    </div>
                </div>
                <div className="bg-white hover:bg-gray-300 inline-block m-4 p-6 overflow-hidden shadow rounded-lg">
                    <div className="px-4 py-5 sm:p-6 ">
                        <dl>
                            <dt className="text-sm leading-5 font-medium text-gray-500 truncate">
                                Total ICUS
                            </dt>
                            <dd className="mt-4 text-5xl leading-9 font-semibold text-gray-900">
                                46
                            </dd>
                        </dl>
                    </div>
                </div>
                <div className="bg-white hover:bg-gray-300 inline-block m-4 p-6 overflow-hidden shadow rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                        <dl>
                            <dt className="text-sm leading-5 font-medium text-gray-500 truncate">
                                Total Capacity
                            </dt>
                            <dd className="mt-4 text-5xl leading-9 font-semibold text-gray-900">
                                1500
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
            <div className="bg-white w-full text-2xl font-semibold p-2 text-center text-red-800">
                Facility Details
            </div>
            <div class="max-w-full flex">
                {/* <div className="md:w-1/3 w-full p-2">
                    <div className="bg-white shadow overflow-hidden  sm:rounded-lg mt-4 p-4 h-full">
                        <div className="mt-4 text-2xl text-center font-semibold px-2 -py-1 rounded shadow bg-gray-200">
                            Govt Medical College
                        </div>

                        <div className="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:py-5">
                            <dt className="text-sm leading-5 font-medium text-gray-500">
                                Facility Type
                            </dt>
                            <dd className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium leading-5 bg-blue-100 text-blue-800 mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                                General Hospitals
                            </dd>
                            <dt className="text-sm leading-5 font-medium text-gray-500">
                                Contact Number
                            </dt>
                            <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                                +91-9568457125
                            </dd>
                        </div>
                        <div className="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:py-5">
                            <dt className="text-sm leading-5 font-medium text-gray-500">
                                State
                            </dt>
                            <dd className="text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                                Kerala
                            </dd>
                            <dt className="text-sm leading-5 font-medium text-gray-500">
                                District
                            </dt>
                            <dd className="text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                                Kottayam
                            </dd>
                            <dt className="text-sm leading-5 font-medium text-gray-500">
                                Local Body
                            </dt>
                            <dd className=" text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                                Kottayam District Panchayat
                            </dd>
                            <dt className="text-sm leading-5 font-medium text-gray-500">
                                Ward
                            </dt>
                            <dd className=" text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                                Pampady
                            </dd>
                        </div>
                        <div className="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:py-5"></div>
                    </div>
                </div> */}
                {/* <div className="md:w-1/3 w-full p-2">
                    <div className="bg-white shadow overflow-hidden  sm:rounded-lg mt-4 p-4 h-full">
                        <div className="mt-4 text-2xl text-center font-semibold px-2 -py-1 rounded shadow bg-gray-200">
                            Hilltop FLTC
                        </div>

                        <div className="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:py-5">
                            <dt className="text-sm leading-5 font-medium text-gray-500">
                                Facility Type
                            </dt>
                            <dd className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium leading-5 bg-blue-100 text-blue-800 mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                                First Line Treatment Center
                            </dd>
                            <dt className="text-sm leading-5 font-medium text-gray-500">
                                Contact Number
                            </dt>
                            <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                                +91-9568457125
                            </dd>
                        </div>
                        <div className="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:py-5">
                            <dt className="text-sm leading-5 font-medium text-gray-500">
                                State
                            </dt>
                            <dd className="text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                                Kerala
                            </dd>
                            <dt className="text-sm leading-5 font-medium text-gray-500">
                                District
                            </dt>
                            <dd className="text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                                Ernakulam
                            </dd>
                            <dt className="text-sm leading-5 font-medium text-gray-500">
                                Local Body
                            </dt>
                            <dd className=" text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                                Aikaranad Grama Panchayat
                            </dd>
                            <dt className="text-sm leading-5 font-medium text-gray-500">
                                Ward
                            </dt>
                            <dd className=" text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                                Pulinchod
                            </dd>
                        </div>
                        <div className="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:py-5"></div>
                    </div>
                </div> */}
                <div className="md:w-1/3 w-full p-2">
                    <div className="bg-white shadow overflow-hidden  sm:rounded-lg mt-4 p-4 h-full">
                        <div className="mt-4 text-2xl text-center font-semibold px-2 -py-1 rounded shadow bg-gray-200">
                            Panchayat Hospital
                        </div>

                        <div className="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:py-5">
                            <dt className="text-sm leading-5 font-medium text-gray-500">
                                Facility Type
                            </dt>
                            <dd className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium leading-5 bg-blue-100 text-blue-800 mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                                General Hospitals
                            </dd>
                            <dt className="text-sm leading-5 font-medium text-gray-500">
                                Contact Number
                            </dt>
                            <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                                +91-9568457125
                            </dd>
                        </div>
                        <div className="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:py-5">
                            <dt className="text-sm leading-5 font-medium text-gray-500">
                                State
                            </dt>
                            <dd className="text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                                Kerala
                            </dd>
                            <dt className="text-sm leading-5 font-medium text-gray-500">
                                District
                            </dt>
                            <dd className="text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                                Ernakulam
                            </dd>
                            <dt className="text-sm leading-5 font-medium text-gray-500">
                                Local Body
                            </dt>
                            <dd className=" text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                                Angamaly Block Panchayat
                            </dd>
                            <dt className="text-sm leading-5 font-medium text-gray-500">
                                Ward
                            </dt>
                            <dd className=" text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                                PALISSERY
                            </dd>
                        </div>
                        <div className="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:py-5"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
