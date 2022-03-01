export const data = [
  {
    name: "Vision",
    start: "05/03/2022",
    time: "12:00 PM",
  },
  {
    name: "Imagine.Ai",
    start: "05/03/2022",
    time: "12:00 PM",
  },
  {
    name: "Lights Camera Render",
    start: "05/03/2022",
    time: "12:00 PM",
  },
  {
    name: "PIXISE",
    start: "05/03/2022",
    time: "12:00 PM",
  },
  {
    name: "Prudentia",
    start: "14/03/2022",
    time: "9:35 AM",
  },
  {
    name: "CSGO",
    start: "14/03/2022",
    time: "7:00PM",
  },
  {
    name: "Valorant",
    start: "14/03/2022",
    time: "7:00PM",
  },
  {
    name: "Rocket League",
    start: "14/03/2022",
    time: "7:00PM",
  },
  {
    name: "CODM",
    start: "14/03/2022",
    time: "7:00PM",
  },
  {
    name: "Clash Royal",
    start: "14/03/2022",
    time: "7:00PM",
  },
  {
    name: "Spill thy words",
    start: "17/03/2022",
    time: "6:00PM",
  },
  {
    name: "Penumbera Round 1",
    start: "17/03/2022",
    time: "6:30PM",
  },
  {
    name: "Tech Hunt",
    start: "17/03/2022",
    time: "9:00PM",
  },
  {
    name: "The Bug",
    start: "18/03/2022",
    time: "5:00PM - 6:30PM",
  },
  {
    name: "Big Tech Quiz Round 1",
    start: "18/03/2022",
    time: "7:00PM - 8:30PM",
  },
  {
    name: "Build It Better",
    start: "19/03/2022",
    time: "10:00AM - 4:00PM",
  },
  {
    name: "Hired",
    start: "19/03/2022",
    time: "4:00PM - 5:00PM",
  },
  {
    name: "Big Tech Quiz Round 2",
    start: "19/03/2022",
    time: "6:00PM - 8:00PM",
  },
  {
    name: "Cook a Code",
    start: "19/03/2022",
    time: "9:00PM - 11:59PM",
  },
  {
    name: "Penumbera Round 2",
    start: "20/03/2022",
    time: "11:00AM - 1:00PM",
  },
  {
    name: "Hired Round 2",
    start: "20/03/2022",
    time: "1:00PM - 2:30PM",
  },
  {
    name: "Hired Round 3",
    start: "20/03/2022",
    time: "3:00PM - 5:00PM",
  },
  {
    name: "Esoverse",
    start: "20/03/2022",
    time: "6:00PM - 8:30PM",
  },
];

const lower = data.filter((_, index) => index % 2 === 0);
const upper = data.filter((_, index) => index % 2 !== 0);

export const timelineData = {
  lower,
  upper,
};
