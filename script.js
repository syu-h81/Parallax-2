$(function() {
  $('.menu-icon').click(function() {
    $('.menu-nav-wrapper').slideToggle();
  });
  
   $(window).scroll(function(){
    var y = $(this).scrollTop();
    $('#ls-bg').css('background-position', '0 ' + parseInt( -y / 4 ) + 'px');
    $('#ls').css('background-position', '0 ' + parseInt( -y / 8 ) + '%');
    //$('#bg2-ls-img').css('background-position', '0 ' + parseInt( -y / 3 ) + 'px');
    //$('#safety-bg').css('background-position', '0 ' + parseInt( -y / 7 ) + 'px');
    //$('#bg02').css('background-position', '0 ' + parseInt( -y / 50 ) + 'px');
    //$('#bg03').css('background-position', '0 ' + parseInt( -y / 200 ) + 'px');
  });
});


window.addEventListener('load',function(){
  document.getElementsByTagName('header')[0].addEventListener('click',function(){
    toggle_menu();
  });
});
window.addEventListener('scroll',function(){
  header_scroll();
  parallax('banner-wrapper-fixed',5,0);
});
function header_scroll(){
  var my_header = document.getElementsByTagName('header')[0];
  var scroll_height = window.pageYOffset;
  if(scroll_height > 400){
    my_header.className = 'header header-scroll';
  }
  else {
    my_header.className = 'header';
  }
}
function parallax(elem,speed,number){
  var target = document.getElementsByClassName(elem)[number];
  var scroll_value = window.pageYOffset;
  if(scroll_value <= 700){
    target.style.transform = 'translateY('+(-scroll_value/speed)+'px)';
  }
  else {
    return;
  }
}
