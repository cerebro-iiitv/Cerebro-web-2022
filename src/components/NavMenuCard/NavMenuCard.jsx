import { Link } from "react-router-dom";
import "./NavMenuCard.scss";

const NavCard = (props) => {
    let linkAddr = "/" + props.title.toLowerCase();
    if (linkAddr === "faq's") {
        linkAddr = "/faq"
    }
    if (linkAddr === "/home") {
        linkAddr = "/"
    }
    return (
        <div className="navcard__wrapper">
            <div className={`navcard__container ${props.className}`}
                style={{
                    transition: props.isTransitionEnabled ? undefined : 'none',
                }}>
                <Link to={linkAddr} className="navcard__link">
                    <div className="navcard__grad-border">
                        <div className="navcard__content">{props.title}</div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default NavCard;