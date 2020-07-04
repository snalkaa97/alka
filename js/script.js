// $('.page-scroll').on('click', function (e) {
//     var tujuan = $(this).attr('href');
//     var elementTujuan = $(tujuan);
//     $('body').animate({
//         scrollTop: elementTujuan.offset().top - 50
//     }, 1250, 'easeInOutExpo');

//     e.preventDefault();
// });


//paralax
//about
$(window).on('load', function () {
    $('.p1').addClass('pMuncul');
    $('.p2').addClass('pMuncul');

})


$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    $('.jumbotron img').css({
        'transform': 'translate(0px, ' + wScroll / 4 + '%)'
    });

    $('.jumbotron h1').css({
        'transform': 'translate(0px, ' + wScroll / 2 + '%)'
    });

    $('.jumbotron p').css({
        'transform': 'translate(0px, ' + wScroll / 1.2 + '%)'
    });


    if (wScroll > $('.portfolio').offset().top - 300) {
        $('.portfolio .thumbnail').each(function (i) {
            setTimeout(function () {
                $('.portfolio .thumbnail').eq(i).addClass('muncul');
            }, 500 * i + 1);
        });

    }
    if (wScroll > $('.contact').offset().top - 300) {
        $('.contact').addClass('muncul2');
    }
});