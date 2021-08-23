$(document).ready(function() {

    var ukryj_menu = true;

    $('.kon_o_firmie_link').on('click', function () {
        $('html, body').animate({
            scrollTop: $('#link_o_firmie').offset().top },700);

        if(ukryj_menu === false) {
            $('#kon_menu').animate({ top: -190 }, 700);
            ukryj_menu = true;
        }
    });

        $('.kon_kontakt_link').on('click', function() {
            $('html, body').animate({
                scrollTop: $('#kon_kontakt').offset().top }, 700)

            if(ukryj_menu === false) {
                $('#kon_menu').animate({ top: -190 }, 700);
                ukryj_menu=true;
            }
        });

    $('.pokaz_menu').on('click', function() {
        if(ukryj_menu == true) {
            $('#kon_menu').animate({ top: 0}, 700);
            ukryj_menu = false;
        }else {
            $('#kon_menu').animate({ top: -190 }, 700);
            ukryj_menu = true;
        }
    });

    $(window).resize(function() {
        var szerokosc_okna = $(window).width();

        if(szerokosc_okna > 768) {
            $('#kon_menu').css('top', 0);
            ukryj_menu = true;
        } else {
            $('#kon_menu').css('top', -190);
        }
    });
});