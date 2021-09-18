$(function ($) {
    // preloader add
    $(window).on('load', function () {
        $('.preloader_gif').delay(300).fadeOut(300);
    });



    //banner slider--------------------
    $('.banner_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,

        dots: true,
        arrows: true,
        prevArrow: '<i class="fa fa-long-arrow-left slick_left" ></i>',
        nextArrow: '<i class="fa fa-long-arrow-right  slick_right "></i>',

    });

    //team slider--------------------
    $('.team_slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        dots: false,
        arrows: true,
        prevArrow: '<i class="fa fa-angle-left  team_slick_left team_hov" ></i>',
        nextArrow: '<i class="fa fa-angle-right  team_slick_right team_hov"></i>',
        asNavFor: ".feedback_content",
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
    }

  ]
    });




    //feedback slider--------------------
    $('.feedback_content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        dots: false,
        arrows: false,
        asNavFor: ".team_slider",


    });
    //feedback  comment  slider--------------------
    $('.feedback_comment_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        dots: false,
        arrows: false,

    });

    // card-group slider--------------------
    $('.card-group').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        dots: false,
        arrows: true,
        prevArrow: '<i class="fa fa-long-arrow-left card_slick_left " ></i>',
        nextArrow: '<i class="fa fa-long-arrow-right  card_slick_right "></i>',
        asNavFor: ".feedback_content",
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    }

  ]

    });



    // client_partner_slider------------
    $('.client_partner_slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    }

  ]

    });





    //-------counter js 
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });


    //-------------menu----------
    var menuTop = $('.custom_nav').offset().top;

    //alert(menuTop);

    $(window).on('scroll', function () {

        var scroll = $(window).scrollTop();

        //alert(scroll);
        if (scroll > menuTop) {
            $('.custom_nav').addClass('custom_nav_new');
        } else {
            $('.custom_nav').removeClass('custom_nav_new');
        }




    });

    //---------bottom to top--------
    $('.top_bottom').on('click', function () {
        $('html,body').animate({
            scrollTop: 400
        });
    });
    
   
    






    // work menu-----------------

    $('.work_menu ul li').on('click', function () {
        $('.work_menu ul li').removeClass('active');
        $(this).addClass('active');

    })

    // filter--------------

    $('.filtr-container').filterizr();


    //    // progressbar.js@1.0.0 
    //    
    //
    //    var bar = new ProgressBar.Line(container, {
    //        strokeWidth: 4,
    //        easing: 'easeInOut',
    //        duration: 1400,
    //        color: '#FFEA82',
    //        trailColor: '#eee',
    //        trailWidth: 3,
    //        svgStyle: {
    //            width: '100%',
    //            height: '100%'
    //        }
    //    });
    //
    //    bar.animate(3.0); // Number from 0.0 to 1.0




    //============================================
    //        smooth scrolling



    $("#zakkashNav ul li a").on('click', function (event) {


        if (this.hash !== "") {

            event.preventDefault();


            var hash = this.hash;


            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {


                window.location.hash = hash;
            });
        }
    });









});
