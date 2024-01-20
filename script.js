$(document).ready(function () {

    /*----------------Header-On-Scroll-----------------*/

    $(window).scroll(function () {
        var navbar = $("#header-scroll-main");
        if ($(document).scrollTop() > 650) {
            navbar.css("top", "0px");
        } else {
            navbar.css("top", "-80px");
        }
    });

    /*----------------Home-Input-Validation-----------------*/

    const forms = $('.needs-validation');

    forms.on('submit', function (event) {
        const form = $(this);

        if (!form[0].checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.addClass('was-validated');
    });

    /*----------------Home-Input-Date/Time-----------------*/

    var currentDate = new Date().toISOString().split('T')[0];
    var currentTime = new Date().toTimeString().split(' ')[0];

    $('#validationCustomDate').val(currentDate);
    $('#validationCustomTime').val(currentTime);


    AOS.init({
        duration: 800
    })
});
