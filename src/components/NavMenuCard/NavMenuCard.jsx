import "./NavMenuCard.scss";

const NavCard = (props) => {
    return (
        <div className="navcard__wrapper">
            <div className={`navcard__container ${props.className}`}
                style={{
                    transition: props.isTransitionEnabled ? undefined : 'none',
                }}>
                <div className="navcard__grad-border">
                    <div className="navcard__content">{props.title}</div>
                </div>
            </div>
        </div>
    )
}

export default NavCard;