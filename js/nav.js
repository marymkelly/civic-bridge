(function(j){
    $('.navbar-right').hide();

    var nav = $('.wrap');

    nav.click(function(){
        //$('.menu').slideToggle();
        $('.navbar-right').toggle("slide", { direction: "right" }, 700);
    });

    if ($(window).width() < 768) {
    $('.navbar-right').show();
    nav.hide();
}

  $(window).resize(function() {
  if ($(window).width() < 768) {
    $('.navbar-right').show();
    nav.hide();
  }
 else {
  $('.navbar-right').hide();
    nav.show();
 }
});


})(jQuery);

var x = document.getElementById('menu');

var rotate = function(line, degree) {
  [].forEach.call(document.querySelectorAll(line), function(item) {
    item.style.transform = 'rotate(' + degree + ')';
  });
};

var hideMiddleLine = function(line) {
  [].forEach.call(document.querySelectorAll(line), function(middle) {
      middle.classList.toggle('off');
  });
};

x.addEventListener('click', function() {
  if (x.classList.contains('rotated')) {
    rotate('.x-1', '0deg');
    rotate('.x-2', '0deg');
  } else {
    rotate('.x-1', '45deg');
    rotate('.x-2', '-45deg');
  }
  
  hideMiddleLine('.x-m');
  x.classList.toggle('rotated');
});