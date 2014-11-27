$(window).scroll(function(){
  if($(document).scrollTop() > 1100){
    $('.progress .progress-bar').progressbar({display_text: 'fill'});
  };
});