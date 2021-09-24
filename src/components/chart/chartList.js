import React from 'react'
import ChartItem from "./chartItem";

function ChartList(props) {
  return (
    <div className="row">
      <div className="col-lg-6">
        <ChartItem title="Confirmed" type="line" />
      </div>
      <div className="col-lg-6">
        <ChartItem title="Deaths" type="bar" />
      </div>
      <div className="col-lg-6">
        <ChartItem title="Active" type="doughnut" />
      </div>
      <div className="col-lg-6">
        <ChartItem title="Recovered" type="pie" />
      </div>
    </div>
  )
}

export default ChartList

