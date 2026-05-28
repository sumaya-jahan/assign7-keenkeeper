import { useNavigate } from "react-router-dom";

const FriendCard = ({ friend }) => {

    const navigate = useNavigate();

    const {
        id,
        name,
        picture,
        days_since_contact,
        status,
        tags,
    } = friend;

    return (
        <div
            onClick={() => navigate(`/friend/${id}`)}
            className="bg-white rounded-2xl p-5 shadow cursor-pointer hover:scale-105 transition"
        >

            <img
                src={picture}
                alt=""
                className="w-24 h-24 rounded-full mx-auto object-cover"
            />

            <h1 className="text-2xl font-bold text-center mt-4 text-black">
                {name}
            </h1>

            <p className="text-center mt-2 text-gray-600">
                {days_since_contact} days ago
            </p>

            <div className="flex flex-wrap gap-2 justify-center mt-3">

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

            <div className="text-center mt-4">

                <span
                    className={`
            px-4 py-2 rounded-full text-white text-sm
            ${status === "overdue" && "bg-red-500"}
            ${status === "almost due" && "bg-yellow-500"}
            ${status === "on-track" && "bg-green-500"}
          `}
                >
                    {status}
                </span>

            </div>

        </div>
    );
};

export default FriendCard;