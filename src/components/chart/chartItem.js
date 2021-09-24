import React from 'react'
import ChartItemType from './chartItemType';
import countriesJSON from '../../json/countries.json';


const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: countriesJSON[0].name,
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: countriesJSON[0].color,
      borderColor: countriesJSON[0].color,
    },
  ],
};


function ChartItem(props) {
  return (
    <div className='chart_header'>
      <h2 className='title'>Line Chart</h2>
      <ChartItemType type="bar" data={data} />
    </div>
  )
}

export default ChartItem


