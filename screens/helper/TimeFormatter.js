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
export function verifyDate(dateTime) {
  let event_fullD,
    today_fullD = "";
  let event_D,
    event_M,
    event_Y,
    today_D,
    today_M,
    today_Y = 0;
  let event_T,
    today_T = [];

  //get Event Date Values
  [event_fullD, event_D, event_M, event_Y, event_T] =
    timeStringToValues(dateTime);

  //get Today Date Values;
  let today = new Date();
  [today_fullD, today_D, today_M, today_Y, today_T] = timeStringToValues(today);

  let Y_diff = event_Y - today_Y;
  if (Y_diff < 0) {
    return {};
  } else if (Y_diff == 0) {
    let M_diff = monthToNum(event_M) - monthToNum(today_M);
    if (M_diff < 0) {
      return {};
    } else if (M_diff == 0) {
      let T_diff = event_D - today_D;
      if (T_diff < 0) {
        return {};
      } else if (T_diff == 0) {
        let hr_diff = Number(event_T[0]) - Number(today_T[0]);
        if (hr_diff < 0) {
          return {};
        } else if (hr_diff == 0) {
          let min_diff = Number(event_T[1]) - Number(today_T[1]);
          if (min_diff <= 0) {
            return {};
          }
        }
      }
    }
  }
  return {
    DayOfWeek: event_fullD,
    Day: event_D,
    Month: event_M,
    Year: event_Y,
    Time: event_T,
  };
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
