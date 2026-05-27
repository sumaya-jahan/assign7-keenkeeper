import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-white shadow">

            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between">

                <h1 className="text-2xl font-bold text-green-800">
                    KeenKeeper
                </h1>

                <div className="flex gap-6">

                    <NavLink to="/">
                        Home
                    </NavLink>

                    <NavLink to="/timeline">
                        Timeline
                    </NavLink>

                    <NavLink to="/stats">
                        Stats
                    </NavLink>

                </div>

            </div>

        </div>
    );
};

export default Navbar;