import React from 'react'
import { lastMonth, lastWeekend, yesterday } from "../../utils/date";
import MenuBtn from '../menuBtn/MenuBtn';

function MenuBtnList(props) {

  const handleOnClick = () => {
    console.log("click")
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
              handleOnClick()
            }}
            className="d-inline-block p-3"
          />)
      })}
    </div>
  )
}

export default MenuBtnList


