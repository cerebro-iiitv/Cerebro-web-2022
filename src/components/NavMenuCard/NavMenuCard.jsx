import { useNavigate } from "react-router-dom";
import "./NavMenuCard.scss";

const NavCard = (props) => {
    const navigate = useNavigate();
    let linkAddr = "/" + props.title.toLowerCase();
    if (linkAddr === "/faq's") {
        linkAddr = "/faq"
    }
    if (linkAddr === "/home") {
        linkAddr = "/"
    }
    const cardClickHandler = () => {
        navigate(linkAddr, { replace: false });
        props.transitionAfterClick();
        props.nohover();
    }
    return (
        <div className="navcard__wrapper">
            <div className={`navcard__container ${props.className}`}
                style={{
                    transition: props.isTransitionEnabled ? undefined : 'none',
                }}>
                <button className="navcard__btn" onClick={cardClickHandler}>
                    <div className="navcard__grad-border">
                        <div className="navcard__content">{props.title}</div>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default NavCard;