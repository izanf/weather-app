
import { isTomorrow, format } from 'date-fns';
 
const parseDate = (date: Date | string | number): string => {
  if (isTomorrow(new Date(date))) return 'Tomorrow';

  return format(new Date(date), 'EEE, d MMM');
}

export default parseDate;
