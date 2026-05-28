import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-white shadow-md">

            <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">

                <h1 className="text-3xl font-bold text-green-700">
                    KeenKeeper
                </h1>

                <div className="flex gap-6 text-lg">

                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "text-green-700 font-bold"
                                : ""
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/timeline"
                        className={({ isActive }) =>
                            isActive
                                ? "text-green-700 font-bold"
                                : ""
                        }
                    >
                        Timeline
                    </NavLink>

                    <NavLink
                        to="/stats"
                        className={({ isActive }) =>
                            isActive
                                ? "text-green-700 font-bold"
                                : ""
                        }
                    >
                        Stats
                    </NavLink>

                </div>

            </div>

        </div>
    );
};

export default Navbar;