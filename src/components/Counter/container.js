import dayjs from 'dayjs';

const year = dayjs().year();

const getLastDay = () => {
    
    const lastday = dayjs(new Date(year, 11, 31)).endOf('month');
    const today =  dayjs();
    const month = lastday.diff(today, 'month');
    const day = lastday.diff(today, 'day');        

    let hours = lastday.subtract(dayjs().hour(), 'hour').format('HH');
    let min = lastday.subtract(dayjs().minute(), 'minute').format('mm');
    let sec = lastday.subtract(dayjs().second(), 'second').format('ss');
    return [month,day,hours,min,sec];
}

export {
    getLastDay, 
    year
};
