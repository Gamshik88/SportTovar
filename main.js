$('.mini__foto > a').click(function (e) { 
    if($('.big__foto').attr('src') != $(this).attr('href')){
        $('.big__foto').hide().attr('src', $(this).attr('href')).fadeIn(1000);
    }
    e.preventDefault();
});

$('.mini__foto  img').click(function (e) { 
    $('.mini__foto  img').fadeTo(500, 1).css({
        'border':'none'
    })

    $(this).fadeTo(500, 0.5).css({
        'border':'1px solid red',
        'border-radius': '13px'
    });
    e.preventDefault();
});

var btn = $('.top');

$(window).on("scroll", function () { 
    if($(window).scrollTop() > 150)
    {
        btn.fadeIn(500);
    } else {
        btn.fadeOut(500);
    }

    var offset = $('.footer').offset();
    var top = offset.top;

    if($(window).scrollTop() >= top - 500) {
        btn.css({
            border: '1px solid white',
            color: 'white'
        })
    } 
    else if ($(window).scrollTop() <= top) {
        btn.css({
            border: '1px solid black',
            color: 'black'
        })
    }
});

btn.click(function() {
    $('html, body').animate({scrollTop: 0}, 600);
})