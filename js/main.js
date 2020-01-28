$(document).ready(function() {
    $('header').load('header.html');

    AOS.init({
        duration: 1200,
    });

    $(function(){
        $('[data-toggle="tooltip"]').tooltip();
    });

    $(".roll").hover(function() {
        var temp = $(this).attr("src");
        $(this).attr("src", $(this).attr("data-alt-src"));
        $(this).attr("data-alt-src", temp);
    });

    $('#panie').click(function() {
        $('.panie-janie').fadeIn(600);
    });

    $('#nie-panie').click(function() {
        $('.panie-janie').fadeOut(600);
    })

    $('#formularz').validate({
        messages: {
            imie: {
                required: 'Pole wymagane',
                minlength: 'Wpisz conajmniej {0} znaki',
            },
            nazwisko: {
                required: 'Pole wymagane',
                minlength: 'Wpisz conajmniej {0} znaki',
            },
            email: {
                required: 'Pole wymagane',
                email: 'Wpisz poprawny adres email',
            },
            pass: {
                required: 'Pole wymagane',
                minlength: 'Wpisz conajmniej {0} znaki',
            },
            inlineRadioOptions: {
                required: 'Pole wymagane',
            },
            panienskie: {
                required: 'Pole wymagane',
                minlength: 'Wpisz conajmniej {0} znaki',
            },
            opcja: {
                required: 'Proszę wybrać conajmniej jedną opcję',
            },
        }
    });

    $('#main-menu').slicknav({
        prependTo: '#attach-menu-mobile',
        label: ''
    });

    //$("a#single_image").fancybox();
});