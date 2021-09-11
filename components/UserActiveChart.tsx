import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from '../utils/highcharts';
import { Options } from 'highcharts';

type Props = {
  title: string;
  users: string[];
  data: Highcharts.XrangePointOptionsObject[];
};
const UserActiveChart: React.VFC<Props> = (props) => {
  const options: Options = {
    title: {
      text: props.title,
    },
    xAxis: {
      type: 'datetime',
    },
    yAxis: {
      categories: props.users,
      reversed: true,
    },
    series: [
      {
        showInLegend: false,
        type: 'xrange',
        pointWidth: 20,
        data: props.data,
        dataLabels: {
          enabled: true,
        },
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default UserActiveChart;
