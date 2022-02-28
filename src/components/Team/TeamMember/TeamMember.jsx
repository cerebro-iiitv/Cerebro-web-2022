import githublogo from "../../../assets/images/githublogo.png";
import linkedinlogo from "../../../assets/images/linkedinlogo.png";
import twitterlogo from "../../../assets/images/twitterlogo.png";
import "./TeamMember.scss";

const TeamMember = ({ profilepic, github, twitter, linked_in, name, role }) => {
    return (
        <div className="team-member">
            <div className="team-member__img-cont">
                <div className="team-member__img-cont__bg">
                    <img src={profilepic} alt="profile" className="team-member__img-cont__bg__img" />
                    <div className="team-member__img-cont__overlay">
                        <a href={github} target="_blank" rel="noreferrer" className="team-member__img-cont__overlay__link"><img src={githublogo} alt="github" /></a>
                        <a href={linked_in} target="_blank" rel="noreferrer" className="team-member__img-cont__overlay__link"><img src={linkedinlogo} alt="linkedin" /></a>
                        <a href={twitter} target="_blank" rel="noreferrer" className="team-member__img-cont__overlay__link"><img src={twitterlogo} alt="twitter" /></a>
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