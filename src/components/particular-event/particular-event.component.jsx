import React from 'react';

import './particular-event.styles.scss';

import {default as toDot} from '../../assets/images/to-dot.svg';
import {default as dateLine} from '../../assets/images/date-line.svg';
import {default as midLine} from '../../assets/images/mid-line.svg';

export const ParticularEvent = ({ title, deadline, prize }) => {
  return (
    <div className='event'>
      <div className="details">
        <h2 className='event-title'>{title}</h2>
        <div className="event-container">
            <p className='event-para'>1 tblspn Greedy, ¾ tblspn DP, ⅝ tblspn Divide and Conquer, and a pinch of CP
            For further communication, join our <a href='#' className='discord-server'>Discord Server</a> </p>
        </div>
        
        <div className='time-line'>
          <div className='date1'>
                <p className='date1-items'>10-03-2022 <br />
               <img src={dateLine} alt="date-line" className='date-line'/><br />
                 8:00PM</p>
          </div>
          <img src={toDot} alt="to-dot-image" className='to-dot'/>
          <div className='date1'>
          <p className='date1-items'>10-03-2022 <br />
               <img src={dateLine} alt="date-line" className='date-line'/><br />
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
            <h4 className='team-size-detail'>3</h4>
          </div>
          <img src={midLine} alt="midLine" />
          
          <div className="organizers-queries">
            <h4>Convenor</h4>
            <h4>Co-Convenor</h4>
            <h4 id = "members">Members</h4>
          </div>

          <div className="organizers-details">
            <h4>Dhruv Dave</h4>
            <h4>Parth Chandravadiya <br /> Dhruv Dave</h4>
            <h4>Parth Chandravadiya <br /> Dhruv Dave</h4>
          </div>
          
        </div>
        <form action="#">
        <div className='button-container'>
          <button>Register Here</button>
          <button>Join Team</button>

        </div>
      </form>
      </div>

      
    </div>
  )
};
