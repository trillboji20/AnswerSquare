$(document).ready(function() {
    var windowWidth;
    windowWidth = $(window).width();
    if (windowWidth > 500) {
        return $('#unbounce-content iframe').attr('scrolling', 'auto');
    }
});
