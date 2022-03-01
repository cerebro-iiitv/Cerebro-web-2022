import React, { useEffect, useState } from "react";

import './Events.scss';

import axiosInstance from "../../services/AxiosInstance";

import { ParticularEvent } from "../../components/particular-event/ParticularEvent";

import EventScrollBar from "../../components/Event-Scroll-Bar/EventScroll";
import {default as logo} from '../../assets/images/Events/Logo.png';

import { default as useAuth } from '../../hooks/useAuth';

const Events = () => {

  const [events, setEvents] = useState([]);
  const [visible, setVisible] = useState(0);
  const [currEvent, setCurrEvent] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [currIdx, setCurrIdx] = useState(-1);
  const [isSelected, setIsSelected] = useState(false);
  const [boxClass, setClass] = useState({up: ["text-dot-container-even"], down: ["text-dot-container-odd"]})

  const auth = useAuth();
  useEffect(() => {
    async function fetchData() {
      // Using axios instance to get the data
      var data = await axiosInstance.get('/events/');
      data = data.data;
      // // To change the name of csgo and codm
      // data[8].title = "CSGO";
      // data[11].title = "CODM";

      // // swap event at index 14 and 17
      // var temp = data[14];
      // data[14] = data[17];
      // data[17] = temp;

      setCurrEvent(data[0]);
      setEvents(data);
      setLoading(false);
    }
    fetchData();
  }, []);


  const loadMore6 = () => {
    setVisible(visible + 5);
  }
  const loadless6 = () => {
    setVisible(visible - 5);
  }

  function loadPage(event, idx) {
    setIsSelected(true);
    setCurrEvent(event);
    setCurrIdx(idx);
    // setClass([...boxClass, 'animate-up'])
    setClass({up: [...boxClass.up, 'animate-up'], down: [...boxClass.down, 'animate-down']});
  }


  return (
    <div className="event-outer">
      {
        isLoading === true ?
          <img src={logo} alt="cerebro-loading-logo" className="loading-logo"/>
          :
          <>
            <div className="event-rendering">
              {

                <ParticularEvent shortName = {currEvent.short_name} rulesDoc = {currEvent.rules_doc} socialMedia = {currEvent.social_media} eventId = {currEvent.id} team_code = {currEvent.team_code ? currEvent.team_code : "XXXX"} key={currEvent.id} subReq = {currEvent.submission_required} isLogged = {auth.isLoggedIn} isReg = {currEvent.is_registered} submitted = {currEvent.submitted} title={currEvent.title} prize={currEvent.prize} team_size={currEvent.team_size} start_time={currEvent.start_time} end_time={currEvent.end_time} description={currEvent.description} convenor={currEvent.contacts[0] ? currEvent.contacts[0].name : "Dhruv Dave"}
                  co_convenor1={currEvent.contacts[1] ? currEvent.contacts[1].name : "Dhruv Dave"} co_convenor2={currEvent.contacts[2] ? currEvent.contacts[2].name : "Dhruv Dave"} mem1={currEvent.contacts[3] ? currEvent.contacts[3].name : "Dhruv Dave"} mem2={currEvent.contacts[4] ? currEvent.contacts[4].name : "Dhruv Dave"} />
              }
            </div>

            <div className="event-scroller">
              <EventScrollBar boxClass = {boxClass} isSelected = {isSelected} loadPage={loadPage} events={events} loadMore6={loadMore6} loadless6={loadless6} visible={visible} currIdx={currIdx} />
            </div>
          </>

      }
    </div>
  )
}

export default Events;