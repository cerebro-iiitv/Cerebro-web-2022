import "./DashboardCardWrapper.scss";

const DashboardCardWrapper = ({ darkBg = false, children, className }) => {
    let cardStyleClass = "dashboard-card-wrapper--light";
    if (darkBg) {
        cardStyleClass = "dashboard-card-wrapper--dark";
    }
    return (
        <div className={`${darkBg ? "dashboard-card-wrapper-bg" : ""} ${className}`}>
            <div className={`dashboard-card-wrapper ${cardStyleClass}`}>
                {children}
            </div>
        </div>
    )
}

export default DashboardCardWrapper;