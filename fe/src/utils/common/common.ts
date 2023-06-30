export const removeEmptyKeyValues = (object: object) => {
  const copiedObject = { ...object };
  Object.entries(copiedObject).forEach((set) => {
    const [key, value] = set;
    if (value === undefined || value === null) delete copiedObject[key];
  });
  return copiedObject;
};

export enum Type {
  LiteralObject = 'Literal Object',
  FormData = 'FormData',
  Array = 'Array',
  String = 'String',
  Number = 'Number',
  Unknown = 'Unknown',
  Boolean = 'Boolean',
}

export const getType = (obj: unknown): Type => {
  const toString = Object.prototype.toString.call(obj);

  switch (toString) {
    case '[object Object]':
      return Type.LiteralObject;
    case '[object String]':
      return Type.String;
    case '[object Number]':
      return Type.Number;
    case '[object Array]':
      return Type.Array;
    case '[object FormData]':
      return Type.FormData;
    case '[object Boolean]':
      return Type.Boolean;
    default:
      return Type.Unknown;
  }
};

const sec = { ms: 1000, text: '초' };
const min = { ms: 60 * sec.ms, text: '분' };
const hour = { ms: 60 * min.ms, text: '시간' };
const day = { ms: 24 * hour.ms, text: '일' };
const week = { ms: 7 * day.ms, text: '주' };
const month = { ms: 30 * day.ms, text: '달' };
const year = { ms: 365 * day.ms, text: '년' };
export const timestampSuffix = ' 전';

export const timeInfo = {
  sec,
  min,
  hour,
  day,
  week,
  month,
  year,
};

export const convertDateToTimeStamp = (date: Date) => {
  let targetDate = date;
  if (typeof date === 'string') {
    targetDate = new Date(targetDate);
  }
  const now = new Date();
  const nowDate = now.getTime();
  const compare = targetDate;
  const compareDate = compare.getTime();
  const diff = nowDate - compareDate;

  const getTimestamp = (unit: keyof typeof timeInfo, diff: number) =>
    diff / timeInfo[unit]?.ms;
  const getDiffText = (unit: keyof typeof timeInfo, timestamp: number) =>
    Math.trunc(timestamp) + timeInfo[unit]?.text + timestampSuffix;
  if (diff < min.ms) {
    const unit = 'sec';
    return getDiffText(unit, getTimestamp(unit, diff));
  }

  if (diff < hour.ms) {
    const unit = 'min';
    return getDiffText(unit, getTimestamp(unit, diff));
  }

  if (diff < day.ms) {
    const unit = 'hour';
    return getDiffText(unit, getTimestamp(unit, diff));
  }

  if (diff < week.ms) {
    const unit = 'day';
    return getDiffText(unit, getTimestamp(unit, diff));
  }

  const yearsDiff = now.getFullYear() - targetDate.getFullYear();
  const monthsDiff = yearsDiff * 12 + now.getMonth() - targetDate.getMonth();

  if (monthsDiff < 1) {
    const unit = 'week';
    return getDiffText(unit, getTimestamp(unit, diff));
  }

  if (yearsDiff < 1) {
    const unit = 'month';
    return getDiffText(unit, Math.trunc(monthsDiff));
  }

  const unit = 'year';
  return getDiffText(unit, Math.trunc(yearsDiff));
};

export const convertNumToPrice = (num: number) => {
  return num.toLocaleString();
};

export const convertPriceToNum = (price: string) => {
  return Number(price.split(',').join(''));
};

export const getRandomElements = <T>(array: T[], count: number) => {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const isMobileDevice = () => {
  return navigator.userAgent.indexOf('IEMobile') !== -1;
};
