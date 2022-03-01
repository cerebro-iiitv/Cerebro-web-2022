import githublogo from "../../../assets/images/githublogo.png";
import linkedinlogo from "../../../assets/images/linkedinlogo.png";
import twitterlogo from "../../../assets/images/twitterlogo.png";
import "./TeamMember.scss";

const TeamMember = ({ category, profilepic, github, twitter, linked_in, name, role }) => {
    return (
        <div className={category === "Web Dev" ? "team-member web" : "team-member"}>
            <div className="team-member__img-cont">
                <div className="team-member__img-cont__bg">
                    <img src={profilepic} alt="profile" className="team-member__img-cont__bg__img" />
                    <div className="team-member__img-cont__overlay">
                        {
                            github ?
                                <a href={github} target="_blank" rel="noreferrer" className="team-member__img-cont__overlay__link"><img src={githublogo} alt="github" /></a>
                                : null
                        }
                        {
                            linked_in ?
                                <a href={linked_in} target="_blank" rel="noreferrer" className="team-member__img-cont__overlay__link"><img src={linkedinlogo} alt="linkedin" /></a>
                                :
                                null
                        }
                        {
                            twitter ?
                                <a href={twitter} target="_blank" rel="noreferrer" className="team-member__img-cont__overlay__link"><img src={twitterlogo} alt="twitter" /></a>
                                :
                                null
                        }
                    </div>
                </div>
            </div>
            <div className="team-member__name">
                {name}
            </div>
            <div className="team-member__title">
                {role}
            </div>
        </div>
    )
}

export default TeamMember;