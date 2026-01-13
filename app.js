$(document).ready(function () {
    const originalText = $('.click').text();

    $('.click').click(function (e) {
        e.preventDefault();
        $('.popup_box').css({
            "opacity": "1",
            "pointer-events": "auto"
        });
    });

    $('.btn1').click(function (e) {
        e.preventDefault();
        $('.popup_box').css({
            "opacity": "0",
            "pointer-events": "none"
        });
    });

    $('.btn2').click(function (e) {
        e.preventDefault();

        $('.popup_box').css({
            "opacity": "0",
            "pointer-events": "none"
        });

        alert("Your Account Deleted Successfully.");

        // change text
        $('.click').text("Account Deleted");

        // return back after 2 seconds
        setTimeout(function () {
            $('.click').text(originalText);
        }, 2000);
    });
});