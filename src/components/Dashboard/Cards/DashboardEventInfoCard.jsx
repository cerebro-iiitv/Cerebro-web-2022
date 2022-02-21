import { Link } from "react-router-dom";
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import DashboardCardWrapper from "./Wrapper/DashboardCardWrapper";
import 'react-circular-progressbar/dist/styles.css';
import "./DashboardEventInfoCard.scss";

const DashboardEventInfoCard = ({ maxNumEvents, numEvents }) => {
    
    return (
        <DashboardCardWrapper darkBg={true} className="dashboard-event-info-card">
            <div className="dashboard-event-info-card__vert-bar"></div>
            <div className="dashboard-event-info-card__details-cont">
                <div className="dashboard-event-info-card__details-cont__indicator">
                    <CircularProgressbarWithChildren
                        value={numEvents}
                        minValue="0"
                        maxValue={maxNumEvents}
                        strokeWidth="5"
                        styles={buildStyles({
                            strokeLinecap: 'round',
                            pathColor: `#f8b813`,
                            trailColor: ' #2162A780',
                            backgroundColor: '#3e98c7',
                        })}
                    >
                        <div className="dashboard-event-info-card__details-cont__indicator__text">
                            {numEvents}
                        </div>
                    </CircularProgressbarWithChildren>
                </div>
                <div className="dashboard-event-info-card__details-cont__text">
                    No. of registered events
                </div>
                <div className="dashboard-event-info-card__details-cont__link">
                    <Link to="/timeline">View Timeline</Link>
                </div>
            </div>
        </DashboardCardWrapper>
    )
}

export default DashboardEventInfoCard;