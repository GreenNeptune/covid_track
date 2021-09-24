import React, { useContext, useState } from "react";
import { globalContext } from '../../context/globalContext'
import { today, yesterday } from "../../utils/date";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DatePickerItem(props) {

  const [startDate, setStartDate] = useState(props.fromDate ? yesterday() : today());
  const { updateDate, date } = useContext(globalContext);

  let maxDate = props.fromDate ? yesterday() : today();

  return (
    <DatePicker
      selected={startDate}
      onChange={(newDate) => {
        updateDate({
          ...date,
          [props.fromDate ? "from" : "to"]: newDate
        })
        setStartDate(newDate)
      }}
      maxDate={maxDate}
    />

  )
}

export default DatePickerItem