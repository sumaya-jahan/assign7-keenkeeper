import { useEffect, useState } from "react";

import {
    PieChart,
    Pie,
    Cell,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
} from "recharts";

const Stats = () => {

    const [friends, setFriends] = useState([]);

    useEffect(() => {

        fetch("/friends.json")
            .then(res => res.json())
            .then(data => setFriends(data));

    }, []);

    const totalFriends = friends.length;

    const overdueFriends =
        friends.filter(friend => friend.status === "overdue").length;

    const onTrackFriends =
        friends.filter(friend => friend.status === "on-track").length;

    const almostDueFriends =
        friends.filter(friend => friend.status === "almost due").length;

    const pieData = [
        {
            name: "Overdue",
            value: overdueFriends
        },
        {
            name: "On Track",
            value: onTrackFriends
        },
        {
            name: "Almost Due",
            value: almostDueFriends
        }
    ];

    const barData = friends.map(friend => ({
        name: friend.name,
        days: friend.days_since_contact
    }));

    const COLORS = [
        "#ef4444",
        "#22c55e",
        "#eab308"
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">

            <div className="text-center mb-14">

                <h1 className="text-5xl font-bold text-black">
                    Friendship Statistics
                </h1>

                <p className="mt-4 text-gray-600">
                    Visual overview of your relationships.
                </p>

            </div>

            {/* TOP CARDS */}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

                <div className="bg-white shadow rounded-2xl p-8 text-center">

                    <h1 className="text-2xl font-bold text-black">
                        Total Friends
                    </h1>

                    <p className="text-5xl font-bold text-blue-600 mt-4">
                        {totalFriends}
                    </p>

                </div>

                <div className="bg-white shadow rounded-2xl p-8 text-center">

                    <h1 className="text-2xl font-bold text-black">
                        Overdue Friends
                    </h1>

                    <p className="text-5xl font-bold text-red-500 mt-4">
                        {overdueFriends}
                    </p>

                </div>

                <div className="bg-white shadow rounded-2xl p-8 text-center">

                    <h1 className="text-2xl font-bold text-black">
                        On Track Friends
                    </h1>

                    <p className="text-5xl font-bold text-green-500 mt-4">
                        {onTrackFriends}
                    </p>

                </div>

            </div>

            {/* CHARTS */}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                {/* PIE CHART */}

                <div className="bg-white shadow rounded-2xl p-6">

                    <h1 className="text-3xl font-bold text-center mb-8 text-black">
                        Relationship Status
                    </h1>

                    <ResponsiveContainer width="100%" height={350}>

                        <PieChart>

                            <Pie
                                data={pieData}
                                cx="50%"
                                cy="50%"
                                outerRadius={120}
                                dataKey="value"
                                label
                            >

                                {
                                    pieData.map((entry, index) => (
                                        <Cell
                                            key={index}
                                            fill={COLORS[index % COLORS.length]}
                                        />
                                    ))
                                }

                            </Pie>

                            <Tooltip />

                        </PieChart>

                    </ResponsiveContainer>

                </div>

                {/* BAR CHART */}

                <div className="bg-white shadow rounded-2xl p-6">

                    <h1 className="text-3xl font-bold text-center mb-8 text-black">
                        Contact Days
                    </h1>

                    <ResponsiveContainer width="100%" height={350}>

                        <BarChart data={barData}>

                            <XAxis dataKey="name" />

                            <YAxis />

                            <Tooltip />

                            <Bar
                                dataKey="days"
                                fill="#3b82f6"
                            />

                        </BarChart>

                    </ResponsiveContainer>

                </div>

            </div>

        </div>
    );
};

export default Stats;