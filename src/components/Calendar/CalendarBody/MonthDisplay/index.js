import React from "react";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import Tasks from "../TasksToo"
import "./style.css"

function MonthDisplay ({ startDate }) {
  const [date, setDate] = useState(startDate);
  const [dateForId, setDateForId] = useState("");

  useEffect(() => {
    const currYear = date.getFullYear();
    const currMonth = date.getMonth() + 1;
    const day = date.getDate()
    const id = `${currYear}-${currMonth}-${day}`
    setDateForId(id);
  },[])

  // console.log(dateForId);

  const changeDateForId = (id) => setDateForId(id);

  const renderCalendar = (date) => {
    let currYear = date.getFullYear(),
    currMonth = date.getMonth();
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
    let liTag = [];

    for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
      let day = lastDateofLastMonth - i + 1;
        // const id = new Date(currYear, currMonth - 1, day).getTime().toString;
        const id = `${currYear}-${currMonth + 1}-${day}`
        // console.log(id);
        liTag.push(<li className="inactive" onClick={() => changeDateForId(id)}>{`${lastDateofLastMonth - i + 1}`}</li>);
    }

    for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
        // adding active class to li if the current day, month, and year matched
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                     && currYear === new Date().getFullYear() ? "active" : "";

        // const id = new Date(currYear, currMonth, i).getTime().toString();
        const id = `${currYear}-${currMonth + 1 }-${i}`
        liTag.push(<li className={`${isToday}`} onClick={()=> changeDateForId(id)}>{`${i}`}</li>);
    }

    for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
      const day = i - lastDayofMonth + 1;
      const id = `${currYear}-${currMonth + 2}-${day}`
      // const id = new Date(currYear, currMonth + 1, i).getTime().toString();
      liTag.push(<li className="inactive" onClick={()=> changeDateForId(id)}>{`${i - lastDayofMonth + 1}`}</li>);
    }
    return liTag;
  }

  const handlerClickPrev = () => {
    const currMonth = date.getMonth()
    const newDate = date.setMonth(currMonth - 1);
    setDate(new Date(newDate));
  }

  const handlerClickNext = () => {
    const currMonth = date.getMonth()
    const newDate = date.setMonth(currMonth + 1);
    setDate(new Date(newDate));
  }

  const days = renderCalendar(date);
  // console.log(days);

  return(
    <div className="wrapper">
      <header>
        <p className="current-date">{format(date, "MMMM yyyy")}</p>
        <div className="icons">
          <span id="prev" className="material-symbols-rounded" onClick={handlerClickPrev}>chevron_left</span>
          <span id="next" className="material-symbols-rounded" onClick={handlerClickNext}>chevron_right</span>
        </div>
      </header>
      <div className="calendar">
        <ul className="weeks">
          <li>Sun</li>
          <li>Mon</li>
          <li>Tue</li>
          <li>Wed</li>
          <li>Thu</li>
          <li>Fri</li>
          <li>Sat</li>
        </ul>
        <ul className="days">
          {days}
        </ul>
      </div>
      <Tasks date={dateForId}/>
    </div>
  )
}

export default MonthDisplay;