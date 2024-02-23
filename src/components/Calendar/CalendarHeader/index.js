import React, { Component } from "react";
import Time from "./Time"
import ShowDate  from "./ShowDate";
import styles from "./CalendarHeader.module.css"

function CalendarHeader ({ startDate }) {
  return(
    <div className={styles.calendarHeader}>
      <Time startDate={ startDate }/>
      <ShowDate startDate={ startDate }/>
    </div>
  )
}

export default CalendarHeader;
