export default {
    generateUUID (len) {
        len = len || 32;
        const $chars = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678";
        /** **默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
        const maxPos = $chars.length;
        let uuid = "";
        for (let i = 0; i < len; i++) {
            uuid += $chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return uuid;
    },
    initNickName () { //随机一个名字
        const firstname = ["李","西门","沈","张","上官","司徒","欧阳","轩辕"];
        const lastname = ["彪","巨昆","锐","翠花","小小","撒撒","熊大","宝强"];
        return firstname[Math.floor(Math.random() * (firstname.length))] + lastname[Math.floor(Math.random() * (lastname.length))];
    },
    trantDateToStr (dateTime, fields) { // 将时间转化成yyyy-mm-dd
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
    }
}

