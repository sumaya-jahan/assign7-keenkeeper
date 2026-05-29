import { useEffect, useState } from "react";

const Timeline = () => {

    const [timeline, setTimeline] = useState([]);

    useEffect(() => {

        const storedTimeline =
            JSON.parse(localStorage.getItem("timeline")) || [];

        setTimeline(storedTimeline);

    }, []);

    const handleDelete = (id) => {

        const remainingTimeline =
            timeline.filter(item => item.id !== id);

        setTimeline(remainingTimeline);

        localStorage.setItem(
            "timeline",
            JSON.stringify(remainingTimeline)
        );
    };

    return (
        <div className="max-w-5xl mx-auto px-4 py-10">

            <div className="text-center mb-12">

                <h1 className="text-5xl font-bold text-black">
                    Relationship Timeline
                </h1>

                <p className="mt-4 text-gray-600">
                    Keep track of your recent interactions.
                </p>

            </div>

            {
                timeline.length === 0 ? (
                    <div className="text-center text-2xl font-semibold py-20">
                        No interactions yet.
                    </div>
                ) : (
                    <div className="space-y-6">

                        {
                            timeline.map(item => (
                                <div
                                    key={item.id}
                                    className="bg-white shadow rounded-2xl p-6 flex flex-col md:flex-row justify-between items-center gap-4"
                                >

                                    <div>

                                        <h1 className="text-2xl font-bold text-black">
                                            {item.title}
                                        </h1>

                                        <p className="text-gray-600 mt-2">
                                            Interaction Type: {item.type}
                                        </p>

                                        <p className="text-gray-600">
                                            Date: {item.date}
                                        </p>

                                    </div>

                                    <button
                                        onClick={() => handleDelete(item.id)}
                                        className="btn btn-error"
                                    >
                                        Delete
                                    </button>

                                </div>
                            ))
                        }

                    </div>
                )
            }

        </div>
    );
};

export default Timeline;