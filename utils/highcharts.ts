import Highcharts, { Options } from 'highcharts';
import xrange from 'highcharts/modules/xrange';

/**
 * Theme options
 */
const textColor = 'var(--chakra-colors-whiteAlpha-900)';
const themeOptions: Options = {
  chart: {
    backgroundColor: 'transparent',
    style: {
      color: textColor,
    },
  },
  title: {
    style: {
      color: textColor,
    },
  },
  colors: [
    'var(--chakra-colors-green-500)',
    'var(--chakra-colors-teal-500)',
    'var(--chakra-colors-cyan-500)',
    'var(--chakra-colors-blue-500)',
    'var(--chakra-colors-purple-500)',
    'var(--chakra-colors-pink-500)',
    'var(--chakra-colors-red-500)',
    'var(--chakra-colors-orange-500)',
    'var(--chakra-colors-yellow-500)',
    'var(--chakra-colors-gray-500)',
  ],
  xAxis: {
    labels: {
      style: {
        color: textColor,
      },
    },
  },
  yAxis: {
    labels: {
      style: {
        color: textColor,
      },
    },
  },
};

/**
 * Display options
 */
const dateFormat = {
  day: '%m/%e(%a) %H:%M',
};
const displayOptions: Options = {
  credits: {
    enabled: false,
  },
  exporting: {
    enabled: false,
  },
  lang: {
    weekdays: ['日', '月', '火', '水', '木', '金', '土'],
  },
  tooltip: {
    dateTimeLabelFormats: dateFormat,
  },
  xAxis: {
    dateTimeLabelFormats: dateFormat,
  },
};

if (typeof Highcharts === 'object') {
  xrange(Highcharts);
  Highcharts.setOptions(themeOptions);
  Highcharts.setOptions(displayOptions);
}

export default Highcharts;
