import Highcharts, { color, Options } from 'highcharts';
import xrange from 'highcharts/modules/xrange';

/**
 * Theme options
 */
const font = {
  family: 'var(--chakra-fonts-body)',
  color: {
    white: 'var(--chakra-colors-whiteAlpha-900)',
  },
  weight: {
    bold: 'var(--chakra-fontWeights-bold)',
  },
  size: {
    xs: 'var(--chakra-fontSizes-xs)',
    sm: 'var(--chakra-fontSizes-sm)',
    md: 'var(--chakra-fontSizes-md)',
    lg: 'var(--chakra-fontSizes-lg)',
  },
};
const themeOptions: Options = {
  chart: {
    backgroundColor: 'transparent',
    colorCount: 9,
    style: {
      color: font.color.white,
      fontFamily: font.family,
      border: font.color.white,
    },
  },
  title: {
    style: {
      color: font.color.white,
      fontSize: font.size.lg,
      fontWeight: font.weight.bold,
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
  ],
  xAxis: {
    labels: {
      style: {
        fontWeight: font.weight.bold,
        fontSize: font.size.xs,
        color: font.color.white,
      },
    },
  },
  yAxis: {
    labels: {
      style: {
        fontWeight: font.weight.bold,
        fontSize: font.size.xs,
        color: font.color.white,
      },
    },
  },
  tooltip: {
    animation: false,
    shape: 'square',
    style: {
      fontSize: font.size.sm,
      backgroundColor: font.color.white,
    },
  },
};

/**
 * Display options
 */
const dateFormat = {
  day: '%m/%e(%a) %H:%M',
  second: '%m/%e(%a) %H:%M:%S',
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
    hideDelay: 200,
  },
  xAxis: {
    dateTimeLabelFormats: dateFormat,
  },
  yAxis: {
    title: {
      text: undefined,
    },
  },
};

if (typeof Highcharts === 'object') {
  xrange(Highcharts);
  Highcharts.setOptions(themeOptions);
  Highcharts.setOptions(displayOptions);
}

export default Highcharts;
