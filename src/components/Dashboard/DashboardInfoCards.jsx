import DashboardAboutCard from "./Cards/DashboardAboutCard";
import DashboardEventInfoCard from "./Cards/DashboardEventInfoCard";
import DashboardSocialsCard from "./Cards/DashboardSocialsCard";
import "./DashboardInfoCards.scss";

const DashboardInfoCards = ({ name, institute, email, contactnum, maxNumEvents, numEvents }) => {
    return (
        <div className="dashboard-info-cards-cont">
            <DashboardAboutCard
                name="Madhur Gupta"
                institute="IIIT Vadodara"
                email="202051112@gmail.com"
                contactnum="1234567890"
            />
            <DashboardEventInfoCard maxNumEvents="20" numEvents="8" />
            <DashboardSocialsCard />
        </div>
    )
}

export default DashboardInfoCards;