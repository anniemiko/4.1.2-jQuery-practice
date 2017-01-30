(function($){
  "use strict"

$(function(){


$('.list-container').hide();

// var showFiles = $('.menuItems').click(function(event){
//       event.preventDefault();
//       $(this).find('.list-container').show();
//     });

$('.menuItems').click(function(){
  $('.menuItems').removeClass('selected').find(".list-container").slideUp();
  $(this).addClass('selected');
  $(this).find('.list-container').slideToggle("slow", function(){

  });
});


});
})(jQuery);
