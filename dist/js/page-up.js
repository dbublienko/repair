$(document).ready(function () {
    var pageUp = $("#page-up");
    var blockPageUp = $(".page-up");

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            blockPageUp.addClass("page-up_active");
        } else {
            blockPageUp.removeClass("page-up_active");
        }
    });

    pageUp.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 300);
    });
});
