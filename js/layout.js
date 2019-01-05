// Slider 
$('.slider-carousel').owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  dots: true,
  nav: true,
  items: 1,
  autoHeight: true,
  navText: [
    "<i class='mdi mdi-watch-export-variant'></i>", 
    "<i class='mdi mdi-watch-export-variant'></i>"
  ],
  autoplaySpeed: 1000,
  autoHeight: true,
});

$('.slider-carousel').on('changed.owl.carousel', function(event) {
  var item = event.item.index-2;

  $('h1').removeClass('animated bounceIn');
  $('.owl-item')
    .not('.cloned')
    .eq(item)
    .find('h1')
    .addClass('animated bounceIn');


  $('h3').removeClass('animated bounceInUp');
  $('.owl-item')
    .not('.cloned')
    .eq(item)
    .find('h3')
    .addClass('animated bounceInUp');

  $('p').removeClass('animated slideInLeft');
  $('.owl-item')
    .not('.cloned')
    .eq(item)
    .find('p')
    .addClass('animated slideInLeft');
  
  $('.slider-text-btn').removeClass('animated flipInX');
  $('.owl-item')
    .not('.cloned')
    .eq(item)
    .find('.slider-text-btn')
    .addClass('animated flipInX');
});

// Slide Partner
$('.partner-carousel').owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  dots: false,
  nav: false,
  autoplaySpeed: 1000,
  margin: 50,
  autoWidth: true,
  responsive: {
    0: {
        items:2
    },
    600: {
        items:3
    },
    1000: {
        items:4
    },
    1200: {
        items:5
    }
  }
});

// Slide modal
$('.xzoom-carousel').owlCarousel({
  loop:false,
  autoplay: false,
  dots: false,
  margin:10,
  nav: true,
  navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>" ] ,
  autoplaySpeed: 1000,
  responsive: {
      0: {
          items:4
      },
      600: {
          items:4
      },
      1000: {
          items:4
      },
      1200: {
          items:4
      }
  }
});

var swiper = new Swiper('.swiper-product', {
  slidesPerView: 4,
  spaceBetween: 15,
  breakpoints: {
    1400: {
      slidesPerView: 4,
    },
    1024: {
        slidesPerView: 2,
    },
    575: {
        slidesPerView: 1,
        spaceBetween: 0,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
}
);

var swiper = new Swiper('.swiper-hot', {
  slidesPerView: 4,
  slidesPerColumn: 2,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1023: {
      slidesPerView: 3,
      slidesPerColumn: 2,
    },
    767: {
      slidesPerView: 2,
      slidesPerColumn: 2,
    },
    575: {
      slidesPerView: 1,
      slidesPerColumn: 1,
      spaceBetween: 0,
    },
  },
});



// $(".nav-tabs li").on("click",function(){ 
//   reinitializeSwiper(swiper);
// });

// function reinitializeSwiper(swiper) {
//    setTimeout(function () {
          
//    }, 400);
// };

$('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
  var paneTarget = $(e.target).attr('href');
  var $thePane = $('.tab-pane' + paneTarget);
  var paneIndex = $thePane.index();
  if (
    $thePane
      .find('.swiper-container')
        .length > 0 && 0 === $thePane
      .find('.swiper-slide-active')
        .length
    ) {
      swiper[paneIndex].update();
    }
});


// XZOOM
$(".xzoom, .xzoom-gallery").xzoom({tint: '#333', Xoffset: 15});
$('.main-image').bind('click', function () {
  var xzoom = $(this).data('xzoom');
  xzoom.closezoom();
  var gallery = xzoom.gallery().cgallery;
  var i, images = new Array();
  for (i in gallery) {
    images[i] = {
      src: gallery[i]
    };
  }
  $.magnificPopup.open({
    items: images,
    type: 'image',
    gallery: {
      enabled: true
    }
  });
  event.preventDefault();
});




$('document').ready(function () {
  // ACTIVE MENU
  let url = window.location.href;
  $(".main-menu a").each(function () {
    if (url == (this.href)) {
      $(this).closest("li a").addClass("active");
      $(this).closest("li li a").removeClass("active");
    }
  });
  // END ACTIVE MENU

  $('.menu .nav').slideAndSwipe();

  let ww = document.body.clientWidth;
    
  $('.menu .nav li').click(function () {
    let $ul = $(this).find('.menu-bottom');
    $ul
      .css('display', 'block')
      .toggleClass('in out')
  });

  if (ww < 992) {
    $('.footer-bottom .collapse').removeClass('show');
  }

  if (ww > 1200) {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 150) {
        $('.menu').addClass('menu-down slideInDown');
        $('.cart-form').addClass('cart-form-down');
      } else {
        $('.menu').removeClass('menu-down slideInDown');
        $('.cart-form').removeClass('cart-form-down');
      }
    });
  } 

  // GO TOP
  $(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
      $('.go-top').fadeIn();

    } else {
      $('.go-top').fadeOut();
    }
  });

  $('.go-top').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });

  $('.go-top').hover(function() {
    $('.go-top i').toggleClass('mdi-watch-import mdi-watch-export')
  });

  // CATEGORY LEFT
  $('.list-cate-title').on('click', function () {
    $('.list-cate-title').removeClass('active');
    $(this).addClass('active');
  });

  // XZOOM SETTING
  $(".xzoom, .xzoom-gallery").xzoom({
    tint: '#333',
    Xoffset: 15
  });

  $('.main-image').bind('click', function () {
    var xzoom = $(this).data('xzoom');
    xzoom.closezoom();
    var gallery = xzoom.gallery().cgallery;
    var i, images = new Array();
    for (i in gallery) {
      images[i] = {
        src: gallery[i]
      };
    }
    $.magnificPopup.open({
      items: images,
      type: 'image',
      gallery: {
        enabled: true
      }
    });
    event.preventDefault();
  });

  // SETTING SEARCH FORM
  $('.search-btn').click(function() {
    $('.overlay').css('display', 'block');
  });
  
  $('.overlay').click(function() {
    $(this).css('display', 'none');
    $('#search').removeClass('show');
  });

  // NOTIFICATION ADD TO CART + WISHLIST
  $('.custom-cart').click(function() {
    Swal({
      title: 'Thông báo',
      type: 'success',
      html: 'Bạn đã thêm vào giỏ thành công',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<a href="/cart">Vào giỏ hàng</a>',
      cancelButtonText:
        'Tiếp tục mua sắm',
    })
  });

  $('.custom-wishlist').click(function() {
    Swal({
      title: 'Thông báo',
      type: 'success',
      html: 'Bạn đã thêm vào danh sách yêu thích thành công',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<a href="/wishlist">Vào danh sách yêu thích</a>',
      cancelButtonText:
        'Tiếp tục mua sắm',
    })
  });

  // SETTING MODAL OPACITY XZOOM
  $('.modal-footer button , .modal-header button , .modal').click(function() {
    $('.xzoom-preview , .xzoom-source').css('opacity', '0')
  });

  //NAVTABS ACTIVE
  $('.navbar-nav .nav-item').on('click', function() {
    $('.navbar-nav .nav-item').removeClass('active')
    $(this).addClass('active')

    let text = $(this).text();
    $('.navbar.navbar-light .navbar-toggler').text(text);
    $('.navbar-collapse').removeClass('show');
  })

});
