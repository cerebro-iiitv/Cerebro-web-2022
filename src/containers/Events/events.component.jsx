import React, { useEffect, useState } from "react";

import './events.styles.scss';

import axiosInstance from "../../services/AxiosInstance";

import { ParticularEvent } from "../../components/particular-event/particular-event.component";

import EventScrollBar from "../../components/Event-Scroll-Bar/event-scroll.component";

const Events = () => {

  const [events, setEvents] = useState([]);
  const [visible, setVisible] = useState(0);
  const [currEvent, setCurrEvent] = useState({});
  const [isActive, setIsActive] = useState(false);
  const [currIdx, setCurrIdx] = useState(-1);

  useEffect(() => {
    async function fetchData() {
      // Using axios instance to get the data
      var data = await axiosInstance.get('/events/');
      data = data.data;

      // To change the name of csgo and codm
      data[8].title = "CSGO";
      data[11].title = "CODM";

      // swap event at index 14 and 17
      var temp = data[14];
      data[14] = data[17];
      data[17] = temp;

      setEvents(data);
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
    console.log(idx);
    setCurrEvent(event);
    setIsActive(true);
    setCurrIdx(idx);
  }



  return (
    <div className="main-event">
      <div className="event-outer">
        
        <div className="event-rendering">
          {
            isActive === true ? <ParticularEvent key={currEvent.id} title={currEvent.title} prize={currEvent.prize} team_size={currEvent.team_size} start_time={currEvent.start_time} end_time={currEvent.end_time} description={currEvent.description} convenor={currEvent.contacts[0] ? currEvent.contacts[0].name : "Dhruv Dave"}
              co_convenor1={currEvent.contacts[1] ? currEvent.contacts[1].name : "Dhruv Dave"} co_convenor2={currEvent.contacts[2] ? currEvent.contacts[2].name : "Dhruv Dave"} mem1={currEvent.contacts[3] ? currEvent.contacts[3].name : "Dhruv Dave"} mem2={currEvent.contacts[4] ? currEvent.contacts[4].name : "Dhruv Dave"} />
              : <ParticularEvent key={1} title={"Tech Hunt"} prize={10000} team_size={5} start_time={"18/3/2022"} end_time={"20/3/2022"} description={"Tech Hunt event"} convenor={"Shreyansh Mishra"} co_convenor1={"Prathak Garg"} co_convenor2={"Anubhav Kushwaha"} mem1={"Spruha Thorat"} mem2={"Raghav Agiwal"} />
          }

        </div>

        <div className="event-scroller">
          <EventScrollBar loadPage={loadPage} events={events} loadMore6={loadMore6} loadless6={loadless6} visible={visible} currIdx={currIdx} />
        </div>
      </div>
    </div>
  )
}

export default Events;