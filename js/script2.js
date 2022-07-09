$(document).ready(function() {
    $('.header__burger').click(function(event){
        $('.header__burger,.header__menu,.header__form-block').toggleClass('active');
        $('body').toggleClass('lock');
    })
})

$(document).ready(function() {
    $('.left-sidebar__title').click(function(event) {
        $(this).toggleClass('active').next().slideToggle(300);
    });
});

/*
$(document).ready(function () {
    $(".right-sidebar__top100_li5st").hide();
    $(".right-sidebar__top100").click(function () {
        $(this).parent().next().slideToggle();
    });
});
*/
$(document).ready(function () {
    $(".right-sidebar__top100_list").hide();
    $(".right-sidebar__top100").click(function () {
        $(".right-sidebar__top100_list").slideToggle();
        $(".right-sidebar__top100_more").hide(30); /*Скрывает ()время*/
    });
});

/*
$(document).ready(function () {
    $('.right-sidebar__top100').click(function (event) {
        $('.box').toggleClass('box');
    })
})
*/

/*jQuery(($) => {
    if ($(window).width() > 992) {
        $(document).ready(function() {
            $('.left-sidebar__title').not($(this)).removeClass('.active');
            $('.left-sidebar__title').not($(this).next()).slideUp(300);
        });
    }
});*/

