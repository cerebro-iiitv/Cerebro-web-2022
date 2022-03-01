import { useEffect, useState } from "react";
import unselectedBtnImg from "../../assets/images/Team/unselected-btn.png";
import selectedBtnImg from "../../assets/images/Team/selected-btn.png";
import "./TeamSelectorItem.scss";

const TeamSelectorItem = ({ title, selectedItem, setSelectedTeam, isEvenNumbered }) => {
    const [willAnimate, setWillAnimate] = useState(false);
    const isItemSelected = selectedItem === title;

    // to clear out the animations when the current team is not selected
    useEffect(() => {
        if (!isItemSelected) {
            setWillAnimate(false);
        }
    }, [isItemSelected])

    // setting up conditional css classes for upper title
    const upperTitleClasses = `team-selector-item__title 
    ${isEvenNumbered ?
            "team-selector-item__title-hidden" :
            "team-selector-item__title-visible"} 
        ${willAnimate ?
            "team-selector-item__title__animate-up" : ""}
            ${isItemSelected ?
            "team-selector-item__title-selected" : ""}`;

    // setting up conditional css classes for lower title
    const lowerTitleClasses = `team-selector-item__title 
    ${isEvenNumbered ?
            "team-selector-item__title-visible"
            : "team-selector-item__title-hidden"}
    ${willAnimate ?
            "team-selector-item__title__animate-down" : ""}
    ${isItemSelected ?
            "team-selector-item__title-selected" : ""}`;

    const btnImg = isItemSelected ? selectedBtnImg : unselectedBtnImg;

    const prBtnClass = title === "PR" ? "pr-round-btn" : "";

    const btnclickHandler = () => {
        setSelectedTeam(title);
        setWillAnimate(true);
    }

    return (
        <div className="team-selector-item">
            <button onClick={btnclickHandler} className={upperTitleClasses}>
                <div className={upperTitleClasses}>{title}</div>
            </button>
            <div className={`team-selector-item__btn-cont ${prBtnClass}`}>
                <button onClick={btnclickHandler}>
                    <img src={btnImg} alt={title} />
                </button>
            </div>
            <button onClick={btnclickHandler} className={lowerTitleClasses}>
                <div className={lowerTitleClasses}>
                    {title === "PR" ? "Public Relations" : title}
                </div>
            </button>
        </div>
    )
}

export default TeamSelectorItem;