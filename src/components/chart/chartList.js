import React from 'react'
import ChartItem from "./chartItem";

function ChartList(props) {
  return (
    <div className="row">
      <div className="col-lg-6">
        <ChartItem title="Confirmed" filter="Confirmed" type="line" />
      </div>
      <div className="col-lg-6">
        <ChartItem title="Deaths" filter="Deaths" type="bar" />
      </div>
      <div className="col-lg-6">
        <ChartItem title="Active" filter="Active" type="doughnut" />
      </div>
      <div className="col-lg-6">
        <ChartItem title="Recovered" filter="Recovered" type="pie" />
      </div>
    </div>
  )
}

export default ChartList

