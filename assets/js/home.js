var showDate = function(id) {
    document.getElementById(id).innerHTML = new Date().toDateString();
};

showDate('date');