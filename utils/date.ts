import { format, formatDistance } from 'date-fns';
import ja from 'date-fns/locale/ja';
import { utcToZonedTime } from 'date-fns-tz';

const utcToTokyo = (date: string) => {
  const jstDate = utcToZonedTime(new Date(date), 'Asia/Tokyo');

  return format(jstDate, 'yyyy/MM/dd (eee) HH:mm:ss', { locale: ja });
};

const dateDistance = (date: string, baseDate: string) =>
  formatDistance(new Date(date), new Date(baseDate), {
    locale: ja,
  });

export { utcToTokyo, dateDistance };
