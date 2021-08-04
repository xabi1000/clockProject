export default function time() {
  const monthsArr = [
      "Ene",
      "Feb",
      "Mar",
      "Abr",
      "May",
      "Jun",
      "Jul",
      "Ago",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    days = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vier", "Sab"],
    week = ["1", "2", "3", "4"],
    date = new Date(),
    year = date.getFullYear(),
    month = date.getMonth(),
    day = date.getDay(),
    hour = date.getHours(),
    minute = date.getMinutes(),
    second = date.getSeconds();

  //    ************************DOM CLOCK ELEMENT************************

  const $year = document.getElementById("year"),
    $month = document.getElementById("month"),
    $day = document.getElementById("day"),
    $week = document.getElementById("week"),
    $hour = document.getElementById("hour"),
    $minute = document.getElementById("minute"),
    $second = document.getElementById("second");

  //    ************************DOM BTN ELEMENT************************

  const $btnClock = document.getElementById("btnClock"),
    $btnPlay = document.getElementById("btnPlay"),
    $btnAlarm = document.getElementById("btnAlarm"),
    $btnAlarmStop = document.getElementById("btnAlarmStop");

  //    ************************ADD TEXT-CONTENT************************

  $year.textContent = year;
  $month.textContent = monthsArr[month];
  $day.textContent = day;
  $hour.textContent = hour;
  $minute.textContent = minute;
  $second.textContent = second;

  const addZero = (dateElem, domElem) => {
    if (dateElem < 10) {
      console.log(dateElem);
      console.log(domElem);
      domElem.textContent = dateElemem;
      return console.log(domElem.textContent);
    }
  };

  console.log(addZero(second, $second));

  //    ************************CONDITIONALS************************

  // if (day < 10) $day.textContent = "0" + `${day}`;
  // if (hour < 10) $hour.textContent = "0" + `${hour}`;
  // if (minute < 10) $minute.textContent = "0" + `${minute}`;
  // if (second < 10) $second.textContent = "0" + `${second}`;

  document.addEventListener("click", e => {
    e.target.closest("#btnClock") ? console.log("true") : console.log("false");
  });
}
