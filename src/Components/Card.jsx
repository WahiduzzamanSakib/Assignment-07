import React from 'react';
import { Link } from 'react-router';


const Card = ({ item }) => {

    const statusColor = {
        overdue: "bg-red-500",
        "almost due": "bg-yellow-500",
        "on-track": "bg-green-500",
    };
    return (
        <Link to={`/details/${item.id}`}>
            <div>
                <div class="flex items-center justify-center p-4 ">
                    <div class="bg-white w-64 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-gray-100 ">

                        <div className="mb-4">
                            <img src={item.picture} alt="Profile" className="rounded-full w-24 h-24 object-cover" />
                        </div>

                        <h2 class="text-xl font-bold text-slate-700">{item.name}</h2>
                        <p class="text-sm text-slate-400 mt-1">{item.days_since_contact} days</p>

                        <div class="mt-4 flex flex-col gap-2">
                            <span class="px-4 py-1  text-xs font-bold rounded-full uppercase ">
                                <div className="flex gap-2">
                                    {item.tags.map((tag, index) => (
                                        <span key={index} className="px-2 py-1 text-xs bg-green-400 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </span>

                        </div>
                        <span className={`px-3 py-2 text-white text-sm font-medium rounded-2xl ${statusColor[item.status]}`}>
                            {item.status}
                        </span>


                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Card;