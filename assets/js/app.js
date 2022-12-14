jQuery(document).ready(function() {
    "use strict";
    jQuery("[data-toggle='tooltip']").tooltip();
    jQuery(".chosen-select").chosen();
    $(".btn-group > .btn").click(function() {
        $(".btn-group > .btn").removeClass("active");
        $(this).addClass("active");
    });

     // ------------------------------------------------------------------------------ //
    // Color plate 
    // ------------------------------------------------------------------------------ //
    $('.color-plate').on('click', function() {
        var name = $(this).attr('data-color');
        $('link[id="skin"]').attr('href', '/assets/css/themes/' + name + '.css');
        // $('.btn').addClass('btn-'+name);
    });
    $('.setting-button').on('click', function() {
        $('.option-panel').toggleClass('option-panel-collased');
    });
     // ------------------------------------------------------------------------------ //
    //fancybox
    // ------------------------------------------------------------------------------ //
    $().fancybox({
        selector: '[data-fancybox="images"]',
    });
     // ------------------------------------------------------------------------------ //
    // Gallery
    // ------------------------------------------------------------------------------ //
    var shuffleme = (function($) {
        var $grid = $('#grid'), //locate what we want to sort
            $filterOptions = $('.portfolio-sorting li'), //locate the filter categories
            $sizer = $grid.find('.shuffle_sizer'), //sizer stores the size of the items
            init = function() {
                // None of these need to be executed synchronously
                setTimeout(function() {
                    listen();
                    setupFilters();
                }, 100);
                // instantiate the plugin
                $grid.shuffle({
                    itemSelector: '[class*="col-"]',
                    sizer: $sizer
                });
            },
            // Set up button clicks
            setupFilters = function() {
                var $btns = $filterOptions.children();
                $btns.on('click', function(e) {
                    e.preventDefault();
                    var $this = $(this),
                        isActive = $this.hasClass('active'),
                        group = isActive ? 'all' : $this.data('group');
                    // Hide current label, show current label in title
                    if (!isActive) {
                        $('.portfolio-sorting li a').removeClass('active');
                    }
                    $this.toggleClass('active');
                    // Filter elements
                    $grid.shuffle('shuffle', group);
                });
                $btns = null;
            },
            // Re layout shuffle when images load. This is only needed
            // below 768 pixels because the .picture-item height is auto and therefore
            // the height of the picture-item is dependent on the image
            // I recommend using imagesloaded to determine when an image is loaded
            // but that doesn't support IE7
            listen = function() {
                var debouncedLayout = $.throttle(300, function() {
                    $grid.shuffle('update');
                });
                // Get all images inside shuffle
                $grid.find('img').each(function() {
                    var proxyImage;
                    // Image already loaded
                    if (this.complete && this.naturalWidth !== undefined) {
                        return;
                    }
                    // If none of the checks above matched, simulate loading on detached element.
                    proxyImage = new Image();
                    $(proxyImage).on('load', function() {
                        $(this).off('load');
                        debouncedLayout();
                    });
                    proxyImage.src = this.src;
                });
                // Because this method doesn't seem to be perfect.
                setTimeout(function() {
                    debouncedLayout();
                }, 500);
            };
        return {
            init: init
        };
    }(jQuery));
    shuffleme.init(); //filter portfolio
     // ------------------------------------------------------------------------------ //
    //Counter
    // ------------------------------------------------------------------------------ //    
    if ($(".count").length) {
        $(window).on("scroll.myCount", function() {
            var h_window_1 = $(window).height() * 0.70,
                p_scroll = $('.count').offset().top,
                get_scroll = p_scroll - h_window_1;
            if ($(document).scrollTop() > get_scroll) {
                $(window).off("scroll.myCount");
                $('.count-value').each(function() {
                    $(".start-count", this).text('0');
                    var data_count = $(this).data("count");
                    $(this).prop('Counter1', 0).animate({
                        Counter1: data_count
                    }, {
                        duration: 5000,
                        easing: 'swing',
                        step: function(now1) {
                            $(".start-count", this).text(Math.ceil(now1));
                        }
                    });
                });
            }
        });
    }
    // ------------------------------------------------------------------------------ //
    //member area Upload photo
    // ------------------------------------------------------------------------------ //
    $(".photo-caption").css({
        'opacity': '0',
        'filter': 'alpha(opacity=0)'
    });
    $(".photo-profile").each(function() {
        $(this).on("mouseenter", function() {
            $(this).find('.photo-caption').stop().fadeTo(400, 1);
            return false;
        });
        $(this).on("mouseleave", function() {
            $(this).find('.photo-caption').stop().fadeTo(400, 0);
            return false;
        });
    });
    // WOW animation library initialization
    var wow = new WOW({
        animateClass: 'animated',
        offset: 100,
        mobile: false
    });
    wow.init();
   
     // ------------------------------------------------------------------------------ //
    // owl slider
    // ------------------------------------------------------------------------------ //
    $('.slider-popular-property,.recent-property', ).owlCarousel({
        // loop:true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        margin: 20,
        nav: true,
        rewind: true,
        smartSpeed: 1200,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    });
    $('.nav-slider-property', ).owlCarousel({
        // loop:true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        margin: 20,
        nav: true,
        rewind: true,
        smartSpeed: 1200,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    $('.slider-testimonial-two').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1200,
        autoHeight: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    });
    $('.wrapblog-slide').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        autoplay: true,
        autoplayTimeout: 6500,
        smartSpeed: 1200,
        autoHeight: true,
        responsive: {
            0: {
                items: 1
            },
            800: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

     // ------------------------------------------------------------------------------ //
    // form slider price
    // ------------------------------------------------------------------------------ //
    $('.nstSlider').nstSlider({
        "left_grip_selector": ".leftGrip",
        "right_grip_selector": ".rightGrip",
        "value_bar_selector": ".bar",
        "value_changed_callback": function(cause, leftValue, rightValue) {
            var $container = $(this).parent();
            $container.find('.leftLabel').text(leftValue);
            $container.find('.rightLabel').text(rightValue);
        },
        "highlight": {
            "grip_class": "gripHighlighted",
            "panel_selector": ".highlightPanel"
        }
    });
    $('#highlightRangeButton').click(function() {
        var highlightMin = Math.random() * 20,
            highlightMax = highlightMin + Math.random() * 80;
        $('.nstSlider').nstSlider('highlight_range', highlightMin, highlightMax);
    });

     // ------------------------------------------------------------------------------ //
    // owl Detail property
    // ------------------------------------------------------------------------------ //
    var changeSlide = 4; // mobile -1, desktop + 1
    // Resize and refresh page. slider-two slideBy bug remove
    var slide = changeSlide;
    if ($(window).width() < 600) {
        var slide = changeSlide;
        slide--;
    } else if ($(window).width() > 999) {
        var slide = changeSlide;
        slide++;
    } else {
        var slide = changeSlide;
    }
    $(document).ready(function() {
        $('.one').owlCarousel({
            nav: true,
            items: 1,
        })
        $('.wrap-features-bestproperties').owlCarousel({
            loop: true,
            items: 1,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 1200,
        })
        $('.two').owlCarousel({
            nav: true,
            margin: 15,
            mouseDrag: false,
            touchDrag: false,
            responsive: {
                0: {
                    items: changeSlide - 1,
                    slideBy: changeSlide - 1
                },
                600: {
                    items: changeSlide,
                    slideBy: changeSlide
                },
                1000: {
                    items: changeSlide + 1,
                    slideBy: changeSlide + 1
                }
            }
        })
        var owl = $('.one');
        owl.owlCarousel();
        owl.on('translated.owl.carousel', function(event) {
            $(".right").removeClass("nonr");
            $(".left").removeClass("nonl");
            if ($('.one .owl-next').is(".disabled")) {
                $(".slider .right").addClass("nonr");
            }
            if ($('.one .owl-prev').is(".disabled")) {
                $(".slider .left").addClass("nonl");
            }
            $('.slider-two .item').removeClass("active");
            var c = $(".slider .owl-item.active").index();
            $('.slider-two .item').eq(c).addClass("active");
            var d = Math.ceil((c + 1) / (slide)) - 1;
            $(".slider-two .owl-dots .owl-dot").eq(d).trigger('click');
        })
        $('.right').click(function() {
            $(".slider .owl-next").trigger('click');
        });
        $('.left').click(function() {
            $(".slider .owl-prev").trigger('click');
        });
        $('.slider-two .item').click(function() {
            var b = $(".item").index(this);
            $(".slider .owl-dots .owl-dot").eq(b).trigger('click');
            $(".slider-two .item").removeClass("active");
            $(this).addClass("active");
        });
        var owl2 = $('.two');
        owl2.owlCarousel();
        owl2.on('translated.owl.carousel', function(event) {
            $(".right-t").removeClass("nonr-t");
            $(".left-t").removeClass("nonl-t");
            if ($('.two .owl-next').is(".disabled")) {
                $(".slider-two .right-t").addClass("nonr-t");
            }
            if ($('.two .owl-prev').is(".disabled")) {
                $(".slider-two .left-t").addClass("nonl-t");
            }
        })
        $('.right-t').click(function() {
            $(".slider-two .owl-next").trigger('click');
        });
        $('.left-t').click(function() {
            $(".slider-two .owl-prev").trigger('click');
        });
    });
    // CLIENTS SLIDER LOGOS
    $(".clients-slider").owlCarousel({
        nav: true,
        margin: 15,
        rewind: true,
        smartSpeed: 1200,
        autoplay: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 4
            }
        }
    });
     /* --------------------------------------------------------
     PAGE LOADER
    ----------------------------------------------------------- */
    $('.spinner-wrapper').delay(1800).fadeOut('slow'); 
});