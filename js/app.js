$(document).ready(function(){

//desbinkulatzeko li-ko click ebentuak
//$('.navbar-nav li').unbind('click');
//navbar li aktibatu ta deskatibatzeko
$('.navbar-nav li').click(function(item){$(this).siblings().removeClass('active');$(this).addClass('active');});

//parallax
$('.parallax-window').parallax();
});
