import "./NavMenuCard.scss";

const NavCard = ({ title }) => {
    return (
        <div className="navcard__wrapper">
            <div className="navcard__container">
                <h2 className="navcard__title">{title}</h2>
            </div>
        </div>
    )
}

export default NavCard;