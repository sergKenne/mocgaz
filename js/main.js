

$(document).ready(function () {
    M.updateTextFields();
    $('.datepicker.date1').datepicker({
        format: 'dd.mm.yyyy',
        i18n: {
            months: [
                'Январь',
                'Февраль',
                'Март',
                'Апрель',
                'Май',
                'Июнь',
                'Июль',
                'Август',
                'Сентябрь',
                'Октябрь',
                'Ноябрь',
                'Декабрь',
            ],
            monthsShort: [
                'Янв',
                'Фев',
                'Мар',
                'Апр',
                'Май',
                'Июн',
                'Июл',
                'Авг',
                'Сен',
                'Окт',
                'Ноя',
                'Дек',
            ],
            weekdays: [
                'Воскресенье',
                'Понедельник',
                'Вторник',
                'Среда',
                'Четверг',
                'Пятница',
                'Суббота',
            ],
            weekdaysShort: ['Вск', 'Пнд', 'Втр', 'Срд', 'Чтв', 'Птн', 'Сбт'],
            weekdaysAbbrev: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        },
    });

    $('.datepicker.date2').datepicker({
        format: 'dd.mm.yyyy',
        i18n: {
            months: [
                'Январь',
                'Февраль',
                'Март',
                'Апрель',
                'Май',
                'Июнь',
                'Июль',
                'Август',
                'Сентябрь',
                'Октябрь',
                'Ноябрь',
                'Декабрь',
            ],
            monthsShort: [
                'Янв',
                'Фев',
                'Мар',
                'Апр',
                'Май',
                'Июн',
                'Июл',
                'Авг',
                'Сен',
                'Окт',
                'Ноя',
                'Дек',
            ],
            weekdays: [
                'Воскресенье',
                'Понедельник',
                'Вторник',
                'Среда',
                'Четверг',
                'Пятница',
                'Суббота',
            ],
            weekdaysShort: ['Вск', 'Пнд', 'Втр', 'Срд', 'Чтв', 'Птн', 'Сбт'],
            weekdaysAbbrev: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        },
    });


    $('.file-icon-close').click(function (event) {
        event.stopPropagation();
        $(this).prev('.validate').removeClass('valid');
    });

    $(".question").click(function (e) {
        e.preventDefault()
        $('.modal-page').slideDown()
    })

    $('.modal-page__btn, .modal-page__icon-close').click(function (e) {
        e.preventDefault();
        $('.modal-page').slideUp();
    });


    let elts = $('.main__left-content .main__content-link');
    Array.from(elts).forEach(elt => {
        $(elt).click(function (e) {
            e.preventDefault();
            elts.removeClass('activ-bg');
            if (!$('.main__right-content').hasClass('show')) {
                console.log("ok");
                $(this).addClass('activ-bg');
            } else {
                $(this).removeClass('activ-bg');
            }
            
            $('.main__right-content').toggleClass('show');

            if ($(this).hasClass('main__content-link--out')) {
                elts.removeClass('activ-bg');
                $('.main__right-content').removeClass('show');
            }
        })
    });

   
});