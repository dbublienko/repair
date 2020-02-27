$(document).ready(function() {
    var button = $("#button");
    var modal = $("#modal");
    var close = $("#close");

    button.click(function() {
        modal.addClass("modal_active");
        setTimeout(function() {
            modal.removeClass("modal_active");
        }, 5000);
    });

    close.click(function() {
        modal.removeClass("modal_active");
    });
});