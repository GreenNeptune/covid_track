import { Line, Pie, Bar, Doughnut } from 'react-chartjs-2';

const ChartItemType = (props) => {

  let types = {
    line: Line,
    pie: Pie,
    bar: Bar,
    doughnut: Doughnut,

  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  const ChartCustomType = types[props.type] || Line;
  return (
    <ChartCustomType data={props.data} options={options} />
  )
}

export default ChartItemType