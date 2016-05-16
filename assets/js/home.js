require('less/home.less');

document.getElementById('show-date').addEventListener('click', function(){
    require.ensure([], function() {
        var showDate = require('exports?showDate!js/showDate.js');
        showDate('date');
    });
});