export const dateFormatDDMMMYYYY = date => {
    const d = new Date(date)
    const format = `${d.getDate()}-${getMonth(d.getMonth())}-${d.getFullYear()}`
    return format;
}


export const dateFormatYYYYMMYY = date => {
    const d = new Date(date)
    const format = `${d.getFullYear()}-${(d.getMonth()+1).toString().padStart(2,0)}-${d.getDate()}`
    return format;
}


export const getMonth = number => {
    switch (number) {
        case 0:
            return 'Jan';
        case 1:
            return 'Feb';
        case 2:
            return 'Mar';
        case 3:
            return 'Apr';
        case 4:
            return 'May';
        case 5:
            return 'Jun';
        case 6:
            return 'Jul';
        case 7:
            return 'Aug';
        case 8:
            return 'Sep';
        case 9:
            return 'Oct';
        case 10:
            return 'Nov';
        case 11:
            return 'Dec';
        default:
            return 'Unknown'
    }
}


export const timeFormat = time => {
    const t = new Date(time);

    let hour = t.getHours();
    let minute = t.getMinutes();

    // setting AM/PM and hour to 12 by checking condition
    let am_pm = 'AM';

    if(hour>11){
    am_pm = 'PM';
    if(hour>12){
        hour = hour - 12;
    }
    }

    if(hour == 0){
    hour = 12;
    }
    const format = `${hour.toString().padStart(2,0)}:${minute.toString().padStart(2,0)} ${am_pm}` ;

    return format;
}


export const getCurrentDate = () => {
    const d = new Date();
    return dateFormatYYYYMMYY(d)
}

export const getCurrentTime = () => {
    const t = new Date();
    return timeFormat(t)
}