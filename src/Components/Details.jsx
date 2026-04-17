import React from "react";

import { CiAlarmOn } from "react-icons/ci";
import { FaArchive } from "react-icons/fa";
import { MdDeleteForever, MdOutlineTextsms, MdOutlineAddIcCall } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import { useParams } from "react-router";
import useData from "./Common/useData";




const Details = () => {
    const { id } = useParams();
    const { data, loading } = useData();
    const item = data.find((item) => String(item.id) === id);

    if (loading) {
        return <div className="flex justify-center items-center my-10">
            <span className="loading loading-spinner loading-xl"></span>
        </div>
    }
    return (
        <div className="bg-gray-200">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6  ">


                <div className="md:col-span-4 space-y-6 my-6 max-w-2xl">

                    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-3 text-center">

                        <img
                            src={item.picture}
                            alt={item.name}
                            className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-white shadow-md"
                        />

                        <h2 className="mt-4 text-xl font-bold text-slate-800">
                            {item.name}
                        </h2>

                        <div className="flex flex-col items-center gap-2 mt-2">
                            <span className="px-3 py-0.5 bg-red-500 text-white text-xs font-bold rounded-full uppercase">
                                {item.status}
                            </span>
                        </div>
                        <span class="px-4 py-1  text-xs font-bold rounded-full uppercase ">
                            <div className="flex gap-2  justify-center">
                                {item.tags.map((tag, index) => (
                                    <span key={index} className="px-2 py-1 text-xs bg-green-400 rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </span>

                        <h2 className="text-gray-400">{item.bio}</h2>
                    </div>
                    <div className="flex flex-col gap-3">
                        <button className="btn"><CiAlarmOn size={24} /> Snooze 2 weeks</button>
                        <button className="btn"><FaArchive /> Archive</button>
                        <button className="btn text-red-500"><MdDeleteForever size={22} /> Delete</button>
                    </div>
                </div>


                <div className="md:col-span-8 space-y-6 my-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                        <div className="bg-base-100 shadow-sm p-4 rounded-lg text-center">
                            <h2 className="font-bold text-2xl">{item.days_since_contact}</h2>
                            <h4 className="text-sm text-gray-500">Days Since Contact</h4>
                        </div>

                        <div className="bg-base-100 shadow-sm p-4 rounded-lg text-center">
                            <h2 className="font-bold text-2xl">{item.goal}</h2>
                            <h4 className="text-sm text-gray-500">Goal Days</h4>
                        </div>

                        <div className="bg-base-100 shadow-sm p-4 rounded-lg text-center">
                            <h2 className="font-bold text-xl">{item.next_due_date}</h2>
                            <h4 className="text-sm text-gray-500">Next Due</h4>
                        </div>

                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <div className="flex justify-between">
                            <h3 className="font-bold text-lg">Relationship Goal</h3>
                            <button className="btn">Edit</button>
                        </div>
                        <p>Connect every <span className="font-bold">{item.goal} days</span></p>
                    </div>

                    <div className="bg-base-200 p-5">
                        <h2 className="my-2 font-bold">Quick Check-In</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">

                            <button className="bg-base-100 shadow-sm rounded-lg p-4 w-full cursor-pointer hover:bg-base-300  flex flex-col items-center gap-2">

                                <MdOutlineAddIcCall size={24} className="text-slate-700" />
                                <span className="text-sm font-medium">Call</span>

                            </button>

                            <button className="bg-base-100 shadow-sm rounded-lg p-4 text-center w-full cursor-pointer hover:bg-base-300  flex flex-col items-center gap-2">
                                <MdOutlineTextsms size={24} />
                                <span className="text-sm font-medium">Text</span>
                            </button>

                            <button className="bg-base-100 shadow-sm rounded-lg p-4 w-full cursor-pointer hover:bg-base-300  flex flex-col items-center gap-2">

                                <FaVideo size={24} className="text-slate-700" />
                                <span className="text-sm font-medium">Video</span>

                            </button>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Details;