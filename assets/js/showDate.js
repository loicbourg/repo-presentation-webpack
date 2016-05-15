var moment = require('moment');

var showDate = function(id) {
    $('#' + id).html(moment().format());
};