import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ParticularEvent.scss';


import { default as toDot } from '../../assets/images/Events/to-dot.svg';
import { default as dateLine } from '../../assets/images/Events/date-line.svg';
import { default as door } from '../../assets/images/Events/door.png';
import { default as midButtonLine } from '../../assets/images/Events/mid-button-line.svg';
import { default as greenTick } from '../../assets/images/Events/green-tick.svg';


// configuring toast
toast.configure()
export const ParticularEvent = ({ shortName, rulesDoc, socialMedia, eventId, team_code, submitted, isLogged, isReg, subReq, title, start_time, prize, end_time, description, team_size, convenor, co_convenor1, co_convenor2, mem1, mem2 }) => {

  // subReq = true;
  // submitted = true;
  // isLogged = false;
  // isReg = undefined;
  // submitted = undefined;
  // subReq = undefined;
  const startDate = start_time.split("-");
  const endDate = end_time.split("-");
  // console.log(startDate);

  if (title === "CSGO") {
    title = "Counter-Strike: Global Offensive";
  }
  else if (title === "CODM") {
    title = "Call of Duty: Mobile";
  }

  const authNotifier = () => {
    toast.info("Log In to Register", { position: toast.POSITION.TOP_LEFT });
  }

  // function for submitting work
  const submitWork = () => {
    // console.log("Called the submit work function");
  }

  // function for registering the user
  const registerUser = () => {
    // console.log("Calling the registered function");
  }

  const joinTeam = () => {
    // console.log("Calling the join team function");
  }
  return (
    <div className='event'>

      <div className="left-door-container">
        <img src={door} alt="left-door" className='left-door' />
      </div>


      <div className="details">
        <div className='event-title'> <p className="title">{title}</p></div>

        <div className="event-container">
          <p className='event-para'>{description}, join our <a href='https://discord.gg/QaYWmeBc' className='discord-server'>Discord Server</a> </p>
        </div>

        <div className='time-line'>
          <div className='date1'>
            <p className='date1-items'>{startDate[0]} </p>
            <img src={dateLine} alt="date-line" className='date-line' />
            <p>{startDate[1]}</p>
          </div>
          <img src={toDot} alt="to-dot" className='to-dot' />
          <div className='date1'>
            <p className='date1-items'>{endDate[0]} </p>
            <img src={dateLine} alt="date-line" className='date-line' />
            <p>{endDate[1]}</p>
          </div>
        </div>


        <div className="event-detail">
          <div className="left-event-details">
            <div className="prize-sec">
              <p className="prize-worth-query">Prize Worth</p>
              <div className="prize-dets">
                <p className="prize-worth-detail">{prize} INR</p>
              </div>
            </div>

            <div className="team-sec">
              <p className="team-size-query">Team Size</p>
              <div className="team-dets">
                <p className="team-size-detail">{team_size}</p>
              </div>
            </div>

            <div className="rules">
              <p className='rules-regulations'> <a href={rulesDoc}>Rules and Regulations</a> <br />
                <a href={socialMedia}>Social Media</a>
              </p>
            </div>
          </div>


          <div className="mid-line"></div>

          <div className="right-event-container">
            <div className="convenor-sec">
              <p className='conv'>Convenor</p>
              <div className="convenor-dets">
                <p>{convenor}</p>
              </div>
            </div>
            <div className="co-convenor-sec">
              <p className='coconv'>Co Convenor</p>
              <p className='co_convenor-details'>{co_convenor1}, {co_convenor2}</p>
            </div>
            <div className="members-sec">
              <p className='mems'>Members</p>
              <p className='members-details'>{mem1}, {mem2}</p>
            </div>
          </div>

        </div>


        <div className="buttonCont">
          {
            isLogged === false ?
              <div className='button-container'>
                {/* <button id="single-button" onClick={authNotifier}>Register</button> */}
                {
                  team_size === 1 ?
                    <button id='single-button' href={null} onClick={authNotifier}>Register</button>
                    :

                    <button id="single-button"  onClick={authNotifier}>Create Team</button>
                }

                {
                  team_size > 1 ?
                    <img src={midButtonLine} className="mid-button-line" alt="mid-button-line" />
                    :
                    ""
                }
                {
                  team_size > 1 ?

                  <button onClick={authNotifier}>Join Team</button>
                    :
                    ""
                }
              </div>
              : <div className='buttonCont'>
                {
                  // here the user is logged in now we check if isReg
                  isReg === true ? <div className='button-container'>
                    {
                      subReq === true ? <div>
                        {
                          submitted === true ? <div className="submit-text"><p className="submitted_text">You have already submitted</p><img src={greenTick} alt="greenTick" className='green-tick' /></div>
                            : <button id="single-button" onClick={submitWork}>Submit</button>
                        }
                      </div>
                        : <div>
                          {/* Here no submission is required */}
                          {/* Route to details page */}

                          <div className="submit-text">
                            <div className="text_image">
                              <p className="submitted_text">You have registered</p>
                              <img src={greenTick} alt="greenTick" className='green-tick' />
                            </div>
                            <p className='team_code_text'>Check Dashboard for more details</p>
                            {
                              team_size > 1 ?
                                <p className="team_code_text">Team Code: <span className='teamCode'>{team_code}</span></p>
                                :
                                ""
                            }
                          </div>

                        </div>
                    }
                  </div> :
                    <div className='button-container'>
                      {
                        team_size === 1 ?
                          <a id='single-button' href={`event/join/${shortName}`} onClick={registerUser}>Register</a>
                          :

                          <a id="single-button" href={`event/create/${shortName}`} onClick={registerUser}>Create Team</a>


                      }

                      {
                        team_size > 1 ?
                          <img src={midButtonLine} className="mid-button-line" alt="mid-button-line" />
                          :
                          ""
                      }
                      {
                        team_size > 1 ?

                          <a href={`event/join/${shortName}`} onClick={joinTeam}>Join Team</a>

                          :
                          ""
                      }
                    </div>

                }

              </div>
          }

        </div>
      </div>

      <div className="right-door-container">
        <img src={door} alt="right-door" className='right-door' />
      </div>
    </div>
  )
};

// 