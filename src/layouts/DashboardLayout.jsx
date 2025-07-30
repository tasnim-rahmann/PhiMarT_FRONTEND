import Sidebar from "../components/Dashboard/Sideber";
import Navbar from "../components/Dashboard/Navber";
import { useState } from "react";
import { Outlet } from "react-router";

const DashboardLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    }

    return (
        <div className="drawer lg:drawer-open">
            <input
                id="drawer-toggle"
                type="checkbox"
                className="drawer-toggle"
                checked={sidebarOpen}
                onChange={toggleSidebar}
            />
            <div className="drawer-content flex flex-col">
                <Navbar sidebarOpen={sidebarOpen} />
                <main className="p-6">
                    <Outlet />
                </main>
            </div>
            <Sidebar />
        </div>
    );
};

export default DashboardLayout;