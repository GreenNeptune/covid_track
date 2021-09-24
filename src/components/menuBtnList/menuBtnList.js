import React, { useContext, useState } from 'react'
import { globalContext } from '../../context/globalContext'
import { lastMonth, lastWeekend, yesterday } from "../../utils/date";
import DatePickerItem from '../datePickerItem/datePickerItem';
import MenuBtn from '../menuBtn/MenuBtn';

function MenuBtnList(props) {

  const { updateDate } = useContext(globalContext);
  const [showDatePicker, setShowDatePicker] = useState(false)

  const handleOnClick = (date) => {
    updateDate({ from: date, to: new Date() })
  }

  let btnMenuListState = [
    {
      title: 'אתמול',
      date: yesterday(),
    },
    {
      title: 'שבוע האחרון',
      date: lastWeekend(),
    },
    {
      title: 'חודש האחרון',
      date: lastMonth(),
    },
  ]


  return (
    <div className="d-flex flex-wrap justify-content-start">
      {btnMenuListState.map((item, ind) => {
        return (
          <MenuBtn
            key={ind}
            title={item.title}
            date={item.date}
            onClick={(e) => {
              e.preventDefault()
              handleOnClick(item.date)
            }}
            className="d-inline-block p-3"
          />)
      })}

      <MenuBtn
        title="מותאם"
        onClick={() => setShowDatePicker(!showDatePicker)}
        className="d-inline-block p-3"
      />
      {showDatePicker &&
        <div>
          <DatePickerItem fromDate />
          <DatePickerItem />
        </div>
      }
    </div>
  )
}

export default MenuBtnList
