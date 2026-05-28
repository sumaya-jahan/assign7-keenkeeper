import { useEffect, useState } from "react";

import FriendCard from "../components/FriendCard";
import Loading from "../components/Loading";

const Home = () => {

    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetch("/src/data/friends.json")
            .then(res => res.json())
            .then(data => {
                setFriends(data);
                setLoading(false);
            })

    }, []);

    if (loading) {
        return <Loading />
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">

            <div className="text-center mb-14">

                <h1 className="text-5xl font-bold text-black">
                    Friends to keep close in your life.
                </h1>

                <p className="mt-4 text-gray-700">
                    Track and maintain your meaningful friendships.
                </p>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                {
                    friends.map(friend => (
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