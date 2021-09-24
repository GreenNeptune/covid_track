import React from 'react'
import ChartItemType from './chartItemType';

const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
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


