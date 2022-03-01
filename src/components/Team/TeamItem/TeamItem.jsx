import React from "react";

import './TeamItem.scss';

import { default as github } from '../../../assets/images/Team/github-logo.svg';
import { default as linkedIn } from '../../../assets/images/Team/linked-in-logo.svg';
import { default as twitter } from '../../../assets/images/Team/twitter-logo.svg';

const TeamItem = ({ currTeam }) => {
    return (
        <div className="team-item">
            <div className="team-col">
                {
                    currTeam.map((member, idx) => (
                        <div className="particular-team">
                            <div className="profile-pic">
                                <img src={member.profilepic} alt="profile-pic" className="profile" />
                            </div>
                            <div className="other-details">

                                <p className="mem_name">{member.name}</p>
                                <p className="mem_role">{member.role}</p>

                                <div className="social-acc">
                                    {
                                        member.github ?
                                            <a href={member.github ? member.github : null}><img src={github} alt="github-loho" /></a>
                                            : null
                                    }
                                    {
                                        member.linked_in ?
                                            <a href={member.linked_in ? member.linked_in : null}><img src={linkedIn} alt="github-loho" /></a>
                                            : null
                                    }
                                    {
                                        member.twitter ?
                                            <a href={member.twitter ? member.twitter : null}><img src={twitter} alt="github-loho" /></a>
                                            : null
                                    }
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