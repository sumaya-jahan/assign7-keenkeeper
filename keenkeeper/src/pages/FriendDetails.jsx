import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FriendDetails = () => {

    const { id } = useParams();

    const [friend, setFriend] = useState(null);

    useEffect(() => {

        fetch("/friends.json")
            .then(res => res.json())
            .then(data => {

                const foundFriend = data.find(
                    friend => friend.id == id
                );

                setFriend(foundFriend);

            });

    }, [id]);

    if (!friend) {
        return (
            <div className="text-center py-20">
                Loading...
            </div>
        )
    }

    const {
        name,
        picture,
        email,
        bio,
        tags,
        status,
        goal,
        days_since_contact,
        next_due_date,
    } = friend;

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* LEFT */}

                <div className="bg-white rounded-2xl shadow p-6">

                    <img
                        src={picture}
                        alt=""
                        className="w-32 h-32 rounded-full mx-auto object-cover"
                    />

                    <h1 className="text-3xl font-bold text-center mt-5 text-black">
                        {name}
                    </h1>

                    <div className="text-center mt-4">

                        <span
                            className={`
                px-4 py-2 rounded-full text-white
                ${status === "overdue" && "bg-red-500"}
                ${status === "almost due" && "bg-yellow-500"}
                ${status === "on-track" && "bg-green-500"}
              `}
                        >
                            {status}
                        </span>

                    </div>

                    <div className="flex flex-wrap gap-2 justify-center mt-5">

                        {
                            tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="bg-gray-200 px-3 py-1 rounded-full text-sm"
                                >
                                    {tag}
                                </span>
                            ))
                        }

                    </div>

                    <p className="mt-6 text-gray-700">
                        {bio}
                    </p>

                    <p className="mt-4 font-semibold text-black">
                        {email}
                    </p>

                    {/* BUTTONS */}

                    <div className="space-y-3 mt-8">

                        <button className="btn btn-warning w-full">
                            ⏰ Snooze 2 Weeks
                        </button>

                        <button className="btn btn-info w-full">
                            📦 Archive
                        </button>

                        <button className="btn btn-error w-full">
                            🗑️ Delete
                        </button>

                    </div>

                </div>

                {/* RIGHT */}

                <div className="lg:col-span-2 space-y-6">

                    {/* STATS */}

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                        <div className="bg-white rounded-2xl shadow p-6 text-center">

                            <h1 className="text-xl font-bold text-black">
                                Days Since Contact
                            </h1>

                            <p className="text-4xl font-bold text-green-700 mt-3">
                                {days_since_contact}
                            </p>

                        </div>

                        <div className="bg-white rounded-2xl shadow p-6 text-center">

                            <h1 className="text-xl font-bold text-black">
                                Goal
                            </h1>

                            <p className="text-4xl font-bold text-green-700 mt-3">
                                {goal}
                            </p>

                        </div>

                        <div className="bg-white rounded-2xl shadow p-6 text-center">

                            <h1 className="text-xl font-bold text-black">
                                Next Due Date
                            </h1>

                            <p className="text-xl font-bold text-green-700 mt-3">
                                {next_due_date}
                            </p>

                        </div>

                    </div>

                    {/* GOAL CARD */}

                    <div className="bg-white rounded-2xl shadow p-6">

                        <div className="flex justify-between items-center">

                            <h1 className="text-2xl font-bold text-black">
                                Relationship Goal
                            </h1>

                            <button className="btn btn-success">
                                Edit
                            </button>

                        </div>

                        <p className="mt-4 text-gray-700">
                            Stay connected every {goal} days.
                        </p>

                    </div>

                    {/* QUICK CHECK IN */}

                    <div className="bg-white rounded-2xl shadow p-6">

                        <h1 className="text-2xl font-bold text-black mb-6">
                            Quick Check-In
                        </h1>

                        <div className="flex flex-wrap gap-4">

                            <button className="btn btn-success">
                                📞 Call
                            </button>

                            <button className="btn btn-primary">
                                💬 Text
                            </button>

                            <button className="btn btn-secondary">
                                🎥 Video
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default FriendDetails;