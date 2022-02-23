import "./DashboardCardWrapper.scss";

const DashboardCardWrapper = ({ darkBg = false, giveInlineFlex = false, children, className }) => {
    let cardStyleClass = "dashboard-card-wrapper--light";
    if (darkBg) {
        cardStyleClass = "dashboard-card-wrapper--dark";
    }

    // Below inline styles where given in order to accomodate less than equal to 5 cards in the dashboard event carousel.
    const flexStyleObj = giveInlineFlex ? { flexGrow: 1, flexShrink: 0 } : {};
    return (
        <div
            className={`${darkBg ? "dashboard-card-wrapper-bg" : ""} ${className}`}
            style={flexStyleObj} >
            <div className={`dashboard-card-wrapper ${cardStyleClass}`}>
                {children}
            </div>
        </div>
    )
}

export default DashboardCardWrapper;