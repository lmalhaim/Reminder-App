export function getFullDay(day) {
  if (day === "Sat") {
    return "Saturday";
  }
  if (day === "Tue") {
    return "Tuesday";
  }
  if (day === "Wed") {
    return "Wednesday";
  }
  if (day === "Thu") {
    return "Thursday";
  }
  return day + "day";
}

export function to12HourFormat(time) {
  let hour = time[0];
  let min = time[1];
  let am_pm = "AM";
  if (Number(hour) >= 12) {
    hour = (Number(hour) - 12).toString();
    am_pm = "PM";
  }

  if (Number(hour) == 0) {
    hour = 12;
  }
  return hour + ":" + min + " " + am_pm;
}

export function timeStringToValues(dateTime) {
  let stripped_dateTime = dateTime.toString().split(" ");
  let fullDay = getFullDay(stripped_dateTime[0]);
  let Month = stripped_dateTime[1];
  let Day = Number(stripped_dateTime[2]);
  let Year = Number(stripped_dateTime[3]);
  let Time = stripped_dateTime[4].split(":");
  return [fullDay, Day, Month, Year, Time];
}

export function monthToNum(Month) {
  if (Month == "Jan") {
    return 1;
  }
  if (Month == "Feb") {
    return 2;
  }
  if (Month == "Mar") {
    return 3;
  }
  if (Month == "Apr") {
    return 4;
  }
  if (Month == "May") {
    return 5;
  }
  if (Month == "Jun") {
    return 6;
  }
  if (Month == "Jul") {
    return 7;
  }
  if (Month == "Aug") {
    return 8;
  }
  if (Month == "Sep") {
    return 9;
  }
  if (Month == "Oct") {
    return 10;
  }
  if (Month == "Nov") {
    return 11;
  }
  return 12;
}
