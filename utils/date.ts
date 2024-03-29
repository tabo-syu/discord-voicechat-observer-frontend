import { format, formatDistance } from 'date-fns';
import ja from 'date-fns/locale/ja';
import { utcToZonedTime } from 'date-fns-tz';

const locale = ja;

const utcToTokyo = (date: string) => {
  const jstDate = utcToZonedTime(new Date(date), 'Asia/Tokyo');

  return format(jstDate, 'yyyy/MM/dd (eee) HH:mm:ss', { locale });
};

const utcToSecond = (date: string) => {
  const jstDate = utcToZonedTime(new Date(date), 'Asia/Tokyo');

  return Date.UTC(
    jstDate.getFullYear(),
    jstDate.getMonth(),
    jstDate.getDate(),
    jstDate.getHours(),
    jstDate.getMinutes(),
    jstDate.getSeconds()
  );
};

const dateDistance = (date: string, baseDate: string) =>
  formatDistance(new Date(date), new Date(baseDate), { locale });

export { utcToTokyo, utcToSecond, dateDistance };
