import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div>

            <h1>KeenKeeper Navbar</h1>

            <Outlet />

            <h1>Footer</h1>

        </div>
    );
};

export default MainLayout;