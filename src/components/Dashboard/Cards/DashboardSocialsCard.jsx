import DashboardCardWrapper from "./Wrapper/DashboardCardWrapper";
import arrowimg from "../../../assets/images/dashboard-social-arrow.png";
import discordlogo from "../../../assets/images/discord-logo.png";
import youtubelogo from "../../../assets/images/youtube-logo.png";
import instagramlogo from "../../../assets/images/instagram-logo.png";
import fblogo from "../../../assets/images/fb-logo.png";
import twitterlogo from "../../../assets/images/twitter-logo.png";
import "./DashboardSocialsCard.scss";

const DashboardSocialsCard = () => {
    return (
        <div className="dashboard-socials-card">
            <DashboardCardWrapper className="dashboard-socials-card__title-cont">
                <div className="dashboard-socials-card__title-cont__text">
                    REACH US
                </div>
            </DashboardCardWrapper>
            <DashboardCardWrapper
                darkBg={true}
                className="dashboard-socials-card__links-cont">
                <div className="dashboard-socials-card__links-cont__row-1">
                    <div className="dashboard-socials-card__links-cont__row-1__l-arrow">
                        <img src={arrowimg} alt="left arrow" />
                    </div>
                    <div className="dashboard-socials-card__links-cont__row-1__discord">
                        <a href="https://discord.gg/ttcvsmCDk7" target="_blank" rel="noreferrer">
                            <img src={discordlogo} alt="discord" />
                        </a>
                    </div>
                    <div className="dashboard-socials-card__links-cont__row-1__r-arrow">
                        <img src={arrowimg} alt="right arrow" />
                    </div>
                </div>
                <div className="dashboard-socials-card__links-cont__row-2">
                    <div className="dashboard-socials-card__links-cont__row-2__youtube">
                        <a href="https://www.youtube.com/c/CerebroTechnicalFest" target="_blank" rel="noreferrer">
                            <img src={youtubelogo} alt="youtube" />
                        </a>
                    </div>
                    <div className="dashboard-socials-card__links-cont__row-2__instagram">
                        <a href="https://bit.ly/3AVI5Sp" target="_blank" rel="noreferrer">
                            <img src={instagramlogo} alt="instagram" />
                        </a>
                    </div>
                    <div className="dashboard-socials-card__links-cont__row-2__facebook">
                        <a href="https://www.facebook.com/cerebro.iiitv/" target="_blank" rel="noreferrer">
                            <img src={fblogo} alt="fb" />
                        </a>
                    </div>
                    <div className="dashboard-socials-card__links-cont__row-2__twitter">
                        <a href="https://twitter.com/cerebro_iiitv" target="_blank" rel="noreferrer">
                            <img src={twitterlogo} alt="twitter" />
                        </a>
                    </div>
                </div>
            </DashboardCardWrapper>
        </div>
    );
}

export default DashboardSocialsCard;