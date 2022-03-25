

$(document).ready(function () {
    M.updateTextFields();
    $('select').formSelect();
    // $('.datepicker.date1').datepicker({
    //     format: 'dd.mm.yyyy',
    //     i18n: {
    //         months: [
    //             'Январь',
    //             'Февраль',
    //             'Март',
    //             'Апрель',
    //             'Май',
    //             'Июнь',
    //             'Июль',
    //             'Август',
    //             'Сентябрь',
    //             'Октябрь',
    //             'Ноябрь',
    //             'Декабрь',
    //         ],
    //         monthsShort: [
    //             'Янв',
    //             'Фев',
    //             'Мар',
    //             'Апр',
    //             'Май',
    //             'Июн',
    //             'Июл',
    //             'Авг',
    //             'Сен',
    //             'Окт',
    //             'Ноя',
    //             'Дек',
    //         ],
    //         weekdays: [
    //             'Воскресенье',
    //             'Понедельник',
    //             'Вторник',
    //             'Среда',
    //             'Четверг',
    //             'Пятница',
    //             'Суббота',
    //         ],
    //         weekdaysShort: ['Вск', 'Пнд', 'Втр', 'Срд', 'Чтв', 'Птн', 'Сбт'],
    //         weekdaysAbbrev: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    //     },
    // });

    // $('.datepicker.date2').datepicker({
    //     format: 'dd.mm.yyyy',
    //     i18n: {
    //         months: [
    //             'Январь',
    //             'Февраль',
    //             'Март',
    //             'Апрель',
    //             'Май',
    //             'Июнь',
    //             'Июль',
    //             'Август',
    //             'Сентябрь',
    //             'Октябрь',
    //             'Ноябрь',
    //             'Декабрь',
    //         ],
    //         monthsShort: [
    //             'Янв',
    //             'Фев',
    //             'Мар',
    //             'Апр',
    //             'Май',
    //             'Июн',
    //             'Июл',
    //             'Авг',
    //             'Сен',
    //             'Окт',
    //             'Ноя',
    //             'Дек',
    //         ],
    //         weekdays: [
    //             'Воскресенье',
    //             'Понедельник',
    //             'Вторник',
    //             'Среда',
    //             'Четверг',
    //             'Пятница',
    //             'Суббота',
    //         ],
    //         weekdaysShort: ['Вск', 'Пнд', 'Втр', 'Срд', 'Чтв', 'Птн', 'Сбт'],
    //         weekdaysAbbrev: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    //     },
    // });


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


   
    if ($(window).width() <= 620) {
        $('.main__content-link--first').click(function () {
            $(this).next('.main__right-content').slideToggle();
        });
    }

       
        // $('.main__content-link--first').click(function () {
        //      if ($(window).width() <= 620) {
        //          $(this).next('.main__right-content').slideToggle();
        //     }     
        // });
    
    


   
});