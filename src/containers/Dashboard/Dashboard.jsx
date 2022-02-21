// import axiosInstance from "../../services/AxiosInstance";
import DashboardTitle from "../../components/Dashboard/DashboardTitle";
import DashboardInfoCards from "../../components/Dashboard/DashboardInfoCards";
import DashboardEvents from "./DashboardEvents";

const Dashboard = () => {
    return (
        <div className="dashboard">
            <DashboardTitle />
            <DashboardInfoCards />
            <DashboardEvents />
        </div>
    )
}

export default Dashboard;