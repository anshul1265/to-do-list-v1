
// console.log(module);

// module.exports = 'Helo World!';

exports.getDate = function () {
    let today = new Date();
    // let currentDay = today.getDay();
    // let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };

    let day = today.toLocaleDateString("en-US", options);

    return day;
}

exports.getDay = function () {
    let today = new Date();
    // let currentDay = today.getDay();
    // let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let options = {
        weekday: 'long',
    };

    let day = today.toLocaleDateString("en-US", options);

    return day;
}