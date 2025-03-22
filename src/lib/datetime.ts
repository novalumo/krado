import { format } from 'date-fns';

export const formatDate = (d: string) => format(new Date(d), 'yyyy.MM.dd');

export const toDateTimeAttributeFormat = (d: string) =>
  format(new Date(d), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
