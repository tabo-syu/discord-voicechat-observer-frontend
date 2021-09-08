import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';

const utcToTz = (date: string, timezone: string) => {
  const jstDate = utcToZonedTime(new Date(date), timezone);

  return format(jstDate, 'yyyy/MM/dd HH:mm:ss');
};

export default utcToTz;
