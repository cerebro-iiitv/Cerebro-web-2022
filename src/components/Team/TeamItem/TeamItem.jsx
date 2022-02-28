import React from "react";

import './TeamItem.scss';

import {default as github} from '../../../assets/images/Team/github-logo.svg';
import {default as linkedIn} from '../../../assets/images/Team/linked-in-logo.svg';
import {default as twitter} from '../../../assets/images/Team/twitter-logo.svg';
import {default as user} from '../../../assets/images/Team/user.svg';

const TeamItem = ({ currTeam }) => {
    return (
        <div className="team-item">
            <div className="team-col">
                {
                    currTeam.map((member, idx) => (
                        <div className="particular-team">
                            <div className="profile-pic">
                                <img src={member.profilepic ? member.profilepic : user} alt="" className="profile" />
                            </div>
                            <div className="other-details">
                                <p className="mem_name">{member.name ? member.name : "Dhruv Dave"}</p>
                                <p className="mem_role">{member.role ? member.role : "Member"}</p>

                                <div className="social-acc">
                                    <a href={member.github ? member.github : "https://github.com/DhruvDave12"}><img src={github} alt="github-loho" /></a>
                                    <a href={member.linked_in ? member.linked_in : "https://github.com/DhruvDave12"}><img src={linkedIn} alt="github-loho"/></a>
                                    <a href={member.twitter ? member.twitter : "https://github.com/DhruvDave12"}><img src={twitter} alt="github-loho"/></a>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default TeamItem;