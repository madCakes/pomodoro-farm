import * as model from "./model";

export const calcTotalPomodoros = function (pomodoro) {
  const { course, research, personalProjects } = pomodoro;
  console.log(course, research, personalProjects);git 

  const sum = course + research + personalProjects;
  console.log(`Sum of pomodoro segments : ${sum}`);

  const pomodoros = sum / 4;
  console.log(`Total pomodoros : ${pomodoros}`);

  return pomodoros;
};
const totalPomodoros = calcTotalPomodoros(pomodoro.pomodoroSegments);

export const calcTotalHours = function (totalPomodoros) {
  const hours = totalPomodoros * 2;
  console.log(`Total hours spent coding : ${hours}h`);

  return hours;
};
calcTotalHours(totalPomodoros);

// TODO create protected method to add totalPomodoros, totalHours, timeFromStartDate

export const calcTimeFromStartDate = function (startDate) {
  console.log(startDate);
  const currentDate = new Date();
};
calcTimeFromStartDate(pomodoro.startDate);

// PROG Maybe add some fun farmer analogies in there too,
