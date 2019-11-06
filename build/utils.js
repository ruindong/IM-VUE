exports.trantDateToStr = (dateTime, fields) => {
    if (typeof dateTime === "string") {
        dateTime = dateTime.replace(/-/g, "/");
    }
    dateTime = new Date(dateTime);
    const year = dateTime.getFullYear();
    let month = dateTime.getMonth() + 1;
    month = Number(month) < 10 ? `0${month}` : month;
    let day = dateTime.getDate();
    day = Number(day) < 10 ? `0${day}` : day;
    let hour = dateTime.getHours();
    hour = Number(hour) < 10 ? `0${hour}` : hour;
    let mini = dateTime.getMinutes();
    mini = Number(mini) < 10 ? `0${mini}` : mini;
    if (fields === "year") {
        return year;
    } else if (fields === "month") {
        return `${year}-${month}`;
    } else if (fields === "month-day"){
        return `${month}-${day}`;
    } else if (fields === "datetime") {
        return `${year}-${month}-${day} ${hour}:${mini}`;
    } else if (fields === "time") {
        return `${hour}:${mini}`;
    } else {
        return `${year}-${month}-${day}`;
    }
};
