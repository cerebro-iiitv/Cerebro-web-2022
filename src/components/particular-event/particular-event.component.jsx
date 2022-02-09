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
        <p className='event-para'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto ipsam fuga reiciendis minima adipisci et mollitia placeat quidem perspiciatis harum numquam nisi temporibus sequi, aperiam cupiditate atque architecto aspernatur debitis.</p>
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
          <div className="prize-details">
            <p><span className='detail-start'>Prize Worth</span>{prize} INR <br />
            <span className='detail-start'>Team Size</span> 3</p>
            <h4>Rules and Regulations <br/>
              Social Media
            </h4>
          </div>
          <img src={midLine} alt="midLine" />
          <div className="event-organizers">
            <h4><span>Convenor</span> Dhruv Dave</h4>
            <h4><span>Co-Convenor</span> Parth Chandravadiya<br />Dhruv Dave</h4>
            <h4><span>Members</span> Parth Chandravadiya<br />Dhruv Dave</h4>
          </div>
        </div>
      </div>
    </div>
  )
};
