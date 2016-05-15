var moment = require('moment');

var showDate = function(id) {
    document.getElementById(id).innerHTML = moment().format();
};