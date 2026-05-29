import { useEffect, useState } from "react";

import FriendCard from "../components/FriendCard";
import Loading from "../components/Loading";

const Home = () => {

    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);

    const [searchText, setSearchText] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");

    useEffect(() => {

        fetch("/friends.json")
            .then(res => res.json())
            .then(data => {
                setFriends(data);
                setLoading(false);
            });

    }, []);

    if (loading) {
        return <Loading />;
    }

    const filteredFriends = friends.filter(friend => {

        const matchesSearch =
            friend.name
                .toLowerCase()
                .includes(searchText.toLowerCase());

        const matchesStatus =
            statusFilter === "all"
                ? true
                : friend.status === statusFilter;

        return matchesSearch && matchesStatus;
    });

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">

            {/* HERO */}

            <div className="text-center mb-14">

                <h1 className="text-5xl font-bold text-black">
                    Friends to keep close in your life.
                </h1>

                <p className="mt-4 text-gray-700">
                    Track and maintain your meaningful friendships.
                </p>

            </div>

            {/* SEARCH + FILTER */}

            <div className="flex flex-col md:flex-row gap-4 justify-between mb-10">

                <input
                    type="text"
                    placeholder="Search friend..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="input input-bordered w-full md:w-1/2"
                />

                <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="select select-bordered w-full md:w-60"
                >
                    <option value="all">
                        All Status
                    </option>

                    <option value="overdue">
                        Overdue
                    </option>

                    <option value="on-track">
                        On Track
                    </option>

                    <option value="almost due">
                        Almost Due
                    </option>

                </select>

            </div>

            {/* FRIENDS */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                {
                    filteredFriends.map(friend => (
                        <FriendCard
                            key={friend.id}
                            friend={friend}
                        />
                    ))
                }

            </div>

        </div>
    );
};

export default Home;