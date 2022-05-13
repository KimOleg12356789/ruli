$(document).ready(function(){
  
$( ".filter-active" ).click(function(){ // задаем функцию при нажатиии на элемент <button>
      $( ".filter-active-open" ).css( "display", "block" ); // вызываем событие click на элементе <div>
    });

$( ".filter-open-button" ).click(function(){ // задаем функцию при нажатиии на элемент <div>
      $( ".filter-active-open" ).toggle(); // отображаем, или скрываем элемент
});




const accordion_items_elms = document.querySelectorAll('.accordion1 .accordion__item1');

accordion_items_elms.forEach(accordionItem => {

  accordionItem.querySelector('.accordion__item__head1').addEventListener('click', (e) => {
    accordionItem.classList.toggle('open');
  });

});





const items = document.querySelectorAll(".item");

items.forEach((item) => {
    item.addEventListener("click", () => {
        item.classList.toggle("open");
    });
});
$('.dropdown-wrapper a').on("click", function(e) {
  e.preventDefault();
  var item = $(this);
  var dropdown = item.parents('.dropdown-wrapper');
  dropdown.find().val(item.data('dropdown-value'));
  dropdown.find('.dropdown-filter').text(item.text());
});


$(".dropdown-wrapper").on("click", function(e) {
  if ( $(this).hasClass("active")){
    $(this).toggleClass("active");
  } else {
    $(this).toggleClass("active");
  }
});
});