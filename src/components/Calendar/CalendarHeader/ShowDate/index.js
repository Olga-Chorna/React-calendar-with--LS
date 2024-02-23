import React from "react";
import { useState } from "react";
import { format } from "date-fns";

function ShowDate({ startDate }) {
  // const [date, setDate] = useState(new Date());

    return(
      <>
        {format(startDate, "eeee, MMMM d yyyy")}
      </>
    )
}

export default ShowDate;