const now = new Date();
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const year = now.getUTCFullYear();
const month = now.getUTCMonth() + 1;
// const day = now.getUTCDate().toUTCString();
const hours = now.getUTCHours();
const minutes = now.getUTCMinutes();
const seconds = now.getUTCSeconds();
const milliseconds = now.getUTCMilliseconds();

document.getElementById("day").innerHTML = days[now.getDay()];

document.getElementById("time").innerHTML = `
${hours}:${minutes}:${seconds}.${milliseconds}`;
