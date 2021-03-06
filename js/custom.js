if($('.home-slide').length > 0){
    $('.home-slide').owlCarousel({
        loop: true,
        margin: 0,
        dots: true,
        items: 1,
        rtl: true,
        nav: true,
        navText: ["<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"]
    })
}

if($('.slide-articles-1').length > 0){
    $('.slide-articles-1').owlCarousel({
        dots: false,
        rtl: true,
        margin: 10,
        loop: true,
        autoWidth: true,
        items: 6,
        nav: true,
        navText: ["<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"]
    })
}
if($('.slide-articles-2').length > 0){
    $('.slide-articles-2').owlCarousel({
        dots: false,
        rtl: true,
        margin: 10,
        loop: true,
        autoWidth: true,
        items: 6,
        nav: true,
        navText: ["<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"]
    })
}
if($('.slide-articles-3').length > 0){
    $('.slide-articles-3').owlCarousel({
        dots: false,
        rtl: true,
        margin: 10,
        loop: true,
        autoWidth: true,
        items: 6,
        nav: true,
        navText: ["<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"]
    })
}
if($('.slide-articles-4').length > 0){
    $('.slide-articles-4').owlCarousel({
        dots: false,
        rtl: true,
        margin: 10,
        loop: true,
        autoWidth: true,
        items: 6,
        nav: true,
        navText: ["<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"]
    })
}
if($('.slide-articles-5').length > 0){
    $('.slide-articles-5').owlCarousel({
        dots: false,
        rtl: true,
        margin: 10,
        loop: true,
        autoWidth: true,
        items: 6,
        nav: true,
        navText: ["<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"]
    })
}
if($('.slide-articles-6').length > 0){
    $('.slide-articles-6').owlCarousel({
        dots: false,
        rtl: true,
        margin: 10,
        loop: true,
        autoWidth: true,
        items: 6,
        nav: true,
        navText: ["<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"]
    })
}

if($('#back-top')){
    var btn = $('#back-top');
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });
    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '1500');
    });
}

if($('.custom-qty').length > 0){
    $(".custom-qty .minus").on('click', function(){
        $val = $(this).closest('.custom-qty').find('input').val();
        if($val > 1) $(this).closest('.custom-qty').find('input').val(parseInt($val) - 1)
    })
    $(".custom-qty .plus").on('click', function(){
        $val = $(this).closest('.custom-qty').find('input').val();
        $(this).closest('.custom-qty').find('input').val(parseInt($val) + 1)
    })
}

if($('.single-filter').length > 0){
    $(".single-filter .filter-title").on('click', function(){
        $(this).closest('.single-filter').find('.filter-content').toggle();
    })
}
if($('.close-filter').length > 0){
    $(".open-filter").on('click', function(){
        $('.category-filter').show();
    })
    $(".close-filter img").on('click', function(){
        $('.category-filter').hide();
    })
}

if($('.checkout-add-address').length > 0){
    $("#add_new_address").on('click', function(){
        $('.checkout-add-address').toggle();
    })
}


if($(window).width() < 786){
    if($('.mobile-menu ul').length > 0){
        $(".mobile-menu ul li a").click(function (event) {
            if($(this).next(".submenu").length == 1 ){
                event.preventDefault();
                $(this).next('.submenu').slideToggle('fast');
            }
        })
        $('.submenu h5').click(function(e){
            e.preventDefault()
            $(this).closest('ul').toggleClass('opened');
        });
    }

    $('.toggle-menu i').click(function(){
        $('.mobile-menu').show();
    });
    $('.close-menu i').click(function(){
        $('.mobile-menu').hide();
    });
}