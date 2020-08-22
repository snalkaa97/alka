// $('.page-scroll').on('click', function (e) {
//     var tujuan = $(this).attr('href');
//     var elementTujuan = $(tujuan);
//     $('body').animate({
//         scrollTop: elementTujuan.offset().top - 50
//     }, 1250, 'easeInOutExpo');

//     e.preventDefault();
// });


$('.nav-link').on('click', function () {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');

})
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


    if (wScroll > $('.portfolio').offset().top - 100) {
        $('.portfolio .thumbnail').each(function (i) {
            setTimeout(function () {
                $('.portfolio .thumbnail').eq(i).addClass('muncul');
            }, 500 * i + 1);
        });

    }
    if (wScroll > $('.contact').offset().top - 100) {
        $('.contact').addClass('muncul2');
    }
});

$('#about').on('click', function (e) {
    e.preventDefault();
    $('html,body').animate({
        scrollTop: $('#about1').offset().top
    }, 1000);
});
$('#portfolio').on('click', function (e) {
    e.preventDefault();
    $('html,body').animate({
        scrollTop: $('#portfolio1').offset().top
    }, 1000);
});
$('#contact').on('click', function (e) {
    e.preventDefault();
    $('html,body').animate({
        scrollTop: $('#contact1').offset().top
    }, 1000);
});

// $(window).scroll(function () {
//     if ($(this).scrollTop() > 100) {
//         $('.scrollToTop').fadeIn();
//     } else {
//         $('.scrollToTop').fadeOut();
//     }
// });

//Click event to scroll to top
$('.scrollToTop').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 900);
    return false;
});



//API YOUTUBE
function videoYoutube() {
    $('#youtube-video').html('');
    $('#info-youtube').html('');
    $.getJSON('https://www.googleapis.com/youtube/v3/search?key=AIzaSyDf4A3QslbqOmyc7TrcUEuO6v2dN6gOGqA&channelId=UC6uxkYqqOyk8aROOcmoyalA&maxResults=1&order=date&part=snippet', function (data) {
        //const videoId = console.log(data.items[0].id.videoId);
        const link = `https://www.youtube.com/embed/` + data.items[0].id.videoId + `?rel=0`
        //const video = concate("", videoId);
        console.log(link);
        const title = data.items[0].snippet.channelTitle;
        console.log(title);


        $('#youtube-video').html(`
        <div class="embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item" src="` + link + `"
          allowfullscreen></iframe>
      </div>
        `)

    });
}

videoYoutube();