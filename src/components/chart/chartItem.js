import React, { useContext } from 'react'
import { globalContext } from '../../context/globalContext';
import ChartItemType from './chartItemType';
import countriesJSON from '../../json/countries.json';
import { format } from 'date-fns';
import { getDatesBetweenDates } from '../../utils/date';

function ChartItem(props) {

  const { countries, date } = useContext(globalContext);

  let data = {
    labels: [...getDatesBetweenDates(date.from, date.to).map(date => format(date, "yyyy-MM-dd"))],
    datasets: countries.map((country, i) => {

      return {
        label: countriesJSON[i].name,
        data: country.map(item => item[props.filter]),
        fill: false,
        backgroundColor: countriesJSON[i].color,
        borderColor: countriesJSON[i].color,

      }
    })
  }

  return (
    <div className='chart_header'>
      <h2 className='title'>{props.title}</h2>
      <ChartItemType type={props.type} data={data} />
    </div>
  )
}

export default ChartItem


