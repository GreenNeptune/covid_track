import React, { useContext } from 'react'
import { globalContext } from '../../context/globalContext'
import { lastMonth, lastWeekend, yesterday } from "../../utils/date";
import DatePickerItem from '../datePickerItem/datePickerItem';
import MenuBtn from '../menuBtn/MenuBtn';

function MenuBtnList(props) {

  const { updateDate } = useContext(globalContext);

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

      <DatePickerItem fromDate />
      <DatePickerItem />
    </div>
  )
}

export default MenuBtnList
