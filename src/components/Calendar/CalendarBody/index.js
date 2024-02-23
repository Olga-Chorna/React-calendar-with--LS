import React from "react";
// import AllDays from "./AllDays";
import MonthDisplay from "./MonthDisplay";
import Tasks from "./TasksToo"

function CalendarBody({ startDate }) {
  
  return(
      <div className="wrapper">
        <MonthDisplay startDate={ startDate }/>
        {/* <Tasks/> */}
     </div>
  )
}

export default CalendarBody;