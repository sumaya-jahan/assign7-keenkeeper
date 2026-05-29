import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar bg-white shadow-md px-6">

            <div className="flex-1">
                <h1 className="text-2xl font-bold text-green-700">
                    KeenKeeper
                </h1>
            </div>

            <div className="flex gap-6">

                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "text-green-700 font-bold"
                            : "text-gray-700"
                    }
                >
                    Home
                </NavLink>

                <NavLink
                    to="/timeline"
                    className={({ isActive }) =>
                        isActive
                            ? "text-green-700 font-bold"
                            : "text-gray-700"
                    }
                >
                    Timeline
                </NavLink>

                <NavLink
                    to="/stats"
                    className={({ isActive }) =>
                        isActive
                            ? "text-green-700 font-bold"
                            : "text-gray-700"
                    }
                >
                    Stats
                </NavLink>

            </div>

        </div>
    );
};

export default Navbar;