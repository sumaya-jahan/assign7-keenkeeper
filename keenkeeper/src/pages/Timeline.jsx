import { useEffect, useState } from "react";

const Timeline = () => {

    const [timeline, setTimeline] = useState([]);

    useEffect(() => {

        const savedTimeline =
            JSON.parse(localStorage.getItem("timeline")) || [];

        setTimeline(savedTimeline);

    }, []);

    return (
        <div className="max-w-5xl mx-auto px-4 py-10">

            <h1 className="text-5xl font-bold text-black mb-10">
                Timeline
            </h1>

            <div className="space-y-5">

                {
                    timeline.map(item => (

                        <div
                            key={item.id}
                            className="bg-white rounded-2xl shadow p-6 flex justify-between items-center"
                        >

                            <div>

                                <h1 className="text-2xl font-bold text-black">
                                    {item.title}
                                </h1>

                                <p className="text-gray-600 mt-2">
                                    {item.date}
                                </p>

                            </div>

                            <div className="text-4xl">

                                {
                                    item.type === "Call" && "📞"
                                }

                                {
                                    item.type === "Text" && "💬"
                                }

                                {
                                    item.type === "Video" && "🎥"
                                }

                            </div>

                        </div>

                    ))
                }

            </div>

        </div>
    );
};

export default Timeline;