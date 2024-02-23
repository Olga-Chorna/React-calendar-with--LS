import React, { useState, useEffect } from 'react';
import styles from "./Time.module.css"

function Time ({ startDate }) {
  const [date, setDate] = useState(startDate);

  useEffect(() => {
    let timerId =  null;
    // console.log("додано ефект")
    // console.log(date)
    timerId = setInterval(() => {
      const newTime = date.getTime() + 1000;
      // console.log(newTime);
      setDate(new Date(newTime));
    }, 1000);

    return() => {
      clearInterval(timerId);
      // console.log("Видалено ефект")
    }
  }, [date]);


  return(
      <div className={styles.timer}>
        {date.toLocaleTimeString('en-GB')}
      </div>
  )
}

export default Time;