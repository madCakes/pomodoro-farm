"use strict";

//  Change to class with private fields
const pomodoro = {
  totalPomodoros: 0,
  totalHours: 0,
  startDate: new Date(2021, 3, 22),
  timeFromStartDate: 0,
  pomodoroSegments: {
    course: 265,
    research: 98,
    personalProjects: 142,
  },
};

const calcTotalPomodoros = function (pomodoro) {
  const { course, research, personalProjects } = pomodoro;
  console.log(course, research, personalProjects);

  const sum = course + research + personalProjects;
  console.log(`Sum of pomodoro segments : ${sum}`);

  const pomodoros = sum / 4;
  console.log(`Total pomodoros : ${pomodoros}`);

  return pomodoros;
};
const totalPomodoros = calcTotalPomodoros(pomodoro.pomodoroSegments);

const calcTotalHours = function (totalPomodoros) {
  const hours = totalPomodoros * 2;
  console.log(`Total hours spent coding : ${hours}h`);

  return hours;
};
calcTotalHours(totalPomodoros);

// create protected method to add totalPomodoros, totalHours, timeFromStartDate

const calcTimeFromStartDate = function (startDate) {
  console.log(startDate);
  const currentDate = new Date();
};
calcTimeFromStartDate(pomodoro.startDate);

// Maybe add some fun farmer analogies in there too,
