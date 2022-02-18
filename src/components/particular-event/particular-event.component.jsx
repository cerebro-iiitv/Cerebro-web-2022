import React from 'react';

import './particular-event.styles.scss';

import { default as toDot } from '../../assets/images/Events/to-dot.svg';
import { default as dateLine } from '../../assets/images/Events/date-line.svg';
import { default as door } from '../../assets/images/Events/door.png';
import { default as midButtonLine } from '../../assets/images/Events/mid-button-line.svg';

export const ParticularEvent = ({ title, start_time, prize, end_time, description, team_size, convenor, co_convenor1, co_convenor2, mem1, mem2 }) => {

  if (title === "CSGO") {
    title = "Counter-Strike: Global Offensive";
  }
  else if (title === "CODM") {
    title = "Call of Duty: Mobile";
  }

  return (
    <div className='event'>

      <div className="left-door-container">
        <img src={door} alt="left-door" className='left-door' />
      </div>


      <div className="details">
        <div className='event-title'>{title}</div>

        <div className="event-container">
          <p className='event-para'>{description}, join our <a href='https://discord.gg/QaYWmeBc' className='discord-server'>Discord Server</a> </p>
        </div>

        <div className='time-line'>
          <div className='date1'>
            <p className='date1-items'>{start_time} </p>
            <img src={dateLine} alt="date-line" className='date-line' />
            <p> 8:00PM</p>
          </div>
          <img src={toDot} alt="to-dot" className='to-dot' />
          <div className='date1'>
            <p className='date1-items'>{end_time} </p>
            <img src={dateLine} alt="date-line" className='date-line' />
             <p>8:00PM</p>
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
              <p className='rules-regulations'> <a href="https://discord.gg/QaYWmeBc">Rules and Regulations</a> <br />
                <a href="https://discord.gg/QaYWmeBc">Social Media</a>
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


        <form>
          <div className='button-container'>
            <button id="single-button">Register</button>
            {
              team_size > 1 ?
                <img src={midButtonLine} className="mid-button-line" alt="mid-button-line" />
                :
                ""
            }
            {
              team_size > 1 ?
                <button>Join Team</button>
                :
                ""
            }

          </div>
        </form>
      </div>

      <div className="right-door-container">
        <img src={door} alt="right-door" className='right-door' />
      </div>
    </div>
  )
};
