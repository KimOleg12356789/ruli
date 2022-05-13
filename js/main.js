
$(document).ready(function(){
  




$('.responsive').slick({
        infinite: true,
        speed: 300,
        dots:true,
        slidesToShow: 1,
        slidesToScroll: 1,

        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            dots:true,
            slidesToScroll: 1
          }
        },


          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              dots:true,
              slidesToScroll: 1
            }
          }
      ]
  });



});




const burger = document.querySelector('.burger');
const navbar = document.querySelector('.mt-mobile');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
    navbar.classList.toggle('nav-open');
    body.classList.toggle('body-open');
    burger.classList.toggle('burger-open');
    
});


const accordion_items_elms = document.querySelectorAll('.accordion .accordion__item');

accordion_items_elms.forEach(accordionItem => {

  accordionItem.querySelector('.accordion__item__head').addEventListener('click', (e) => {
    accordionItem.classList.toggle('open');
  });

});



$( ".special-offers-button" ).click(function(){ // задаем функцию при нажатиии на элемент <div>
          $( ".special-offers" ).css( "display", "none" ); // отображаем, или скрываем элемент
});

$( "#click-1" ).click(function(){ // задаем функцию при нажатиии на элемент <div>
          $( "#is1" ).css( "display", "none" ); // отображаем, или скрываем элемент
});

$( "#click-2" ).click(function(){ // задаем функцию при нажатиии на элемент <div>
          $( "#is2" ).css( "display", "none" ); // отображаем, или скрываем элемент
});

$( "#click-3" ).click(function(){ // задаем функцию при нажатиии на элемент <div>
          $( "#is3" ).css( "display", "none" ); // отображаем, или скрываем элемент
});

(function($) {
$(function() {

  $('#up').click(function() {
    $('html, body').animate({scrollTop: 0},500);
    return false;
  })

})
})(jQuery)

var t;
function up() {
  var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
  if(top > 0) {
    window.scrollBy(0,-100);
    t = setTimeout('up()',20);
  } else clearTimeout(t);
  return false;
}
