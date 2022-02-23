import DashboardAboutCard from "./Cards/DashboardAboutCard";
import DashboardEventInfoCard from "./Cards/DashboardEventInfoCard";
import DashboardSocialsCard from "./Cards/DashboardSocialsCard";
import "./DashboardInfoCards.scss";

const DashboardInfoCards = ({ name, instituteName, email, mobileNo, noOfRegsiteredEvents }) => {
    return (
        <div className="dashboard-info-cards-cont">
            <DashboardAboutCard
                name={name}
                instituteName={instituteName}
                email={email}
                mobileNo={mobileNo}
            />
            <DashboardEventInfoCard noOfRegsiteredEvents={noOfRegsiteredEvents} />
            <DashboardSocialsCard />
        </div>
    )
}

export default DashboardInfoCards;