import { useContext, useState } from "react";
import { GetData } from "./DataContext";



const Timeline = () => {
    const { contest } = useContext(GetData);

    const [filter, setFilter] = useState("all");

    const filteredContest =
        filter === "all"
            ? contest
            : contest.filter((entry) => entry.action === filter);

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h2 className="text-3xl font-bold mb-4">Timeline</h2>

            <select value={filter} onChange={(e) => setFilter(e.target.value)} className="select select-bordered mb-4">
                <option value="all">All</option>
                <option value="call">Call</option>
                <option value="text">Text</option>
                <option value="video">Video</option>
            </select>

            {filteredContest.length === 0 ? (
                <p className="font-bold text-2xl text-center my-5">
                    No history yet !!!
                </p>
            ) : (
                <div className="space-y-4">
                    {filteredContest.map((entry, index) => {
                        const { item, action } = entry;

                        return (
                            <div
                                key={index}
                                className="p-4 rounded-lg shadow bg-base-200"
                            >
                                <div className="mt-2 font-medium space-y-1">
                                    <div className="flex items-center gap-2">
                                        <span>
                                            {action === "call" && "📞 Call with "}
                                            {action === "text" && "💬 Text with "}
                                            {action === "video" && "🎥 Video call with "}
                                            <span className="font-bold">
                                                {item.name}
                                            </span>
                                        </span>
                                    </div>

                                    <span className="text-sm text-gray-500">
                                        Date: {item.next_due_date}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Timeline;