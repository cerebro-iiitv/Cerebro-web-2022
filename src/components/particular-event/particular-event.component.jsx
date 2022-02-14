import React from 'react';

import './particular-event.styles.scss';

import {default as toDot} from '../../assets/images/Events/to-dot.svg';
import {default as dateLine} from '../../assets/images/Events/date-line.svg';
import {default as door} from '../../assets/images/Events/door.svg';
import {default as midButtonLine} from '../../assets/images/Events/mid-button-line.svg';

export const ParticularEvent = ({ title, start_time, prize, end_time, description, team_size, convenor, co_convenor1, co_convenor2, mem1, mem2 }) => {

  if(title === "CSGO"){
    title = "Counter-Strike: Global Offensive";
  }
  else if (title === "CODM"){
    title = "Call of Duty: Mobile";
  }

  return (
    <div className='event'>
      <img src={door} alt="left-door" className='left-door'/>
      <div className="details">
        <h2 className='event-title'>{title}</h2>
        <div className="event-container">
            <p className='event-para'>{description}, join our <a href='#' className='discord-server'>Discord Server</a> </p>
        </div>
        
        <div className='time-line'>
          <div className='date1'>
                <p className='date1-items'>{start_time} <br />
               <img src={dateLine} alt="date-line" className='date-line'/> <br />
                 8:00PM</p>
          </div>
          <img src={toDot} alt="to-dot-image" className='to-dot'/>
          <div className='date1'>
          <p className='date1-items'>{end_time} <br />
               <img src={dateLine} alt="date-line" className='date-line'/> <br />
                 8:00PM</p>
          </div>
        </div>
        <div className="event-detail">
          <div className="prize-queries">
            <h4 className='prize-worth-query'>Prize Worth</h4>
            <h4 className='team-size-query'>Team Size</h4>
            <h4 className='rules-regulations'> <a href="#">Rules and Regulations</a> <br/>
              <a href="#">Social Media</a> 
            </h4>
          </div>

          <div className="prize-details">
            <h4 className='prize-worth-detail'>{prize} INR</h4>
            <h4 className='team-size-detail'>{team_size}</h4>
          </div>
          <div className='mid-line'></div>
          
          <div className="organizers-queries">
            <h4>Convenor</h4>
            <h4>Co-Convenor</h4>
            <h4 id = "members">Members</h4>
          </div>

          <div className="organizers-details">
            <p>{convenor}</p>
            <p>{co_convenor1}, {co_convenor2}</p>
            <p>{mem1}, {mem2}</p>
          </div>
          
        </div>
        <form action="#">
        <div className='button-container'>
          <button id = "single-button">Register Here</button>
          {
            team_size > 1 ? 
            <img src={midButtonLine} className = "mid-button-line" alt="mid-button-line" />
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

      <img src={door} alt="right-door" className='right-door'/>
    </div>
  )
};
