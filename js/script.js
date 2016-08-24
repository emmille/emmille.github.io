$(document).ready(function(){
 $('button').click(function(){
   $('img').toggle();
 });
 $('p').fadeIn(2000);
 $('h1').fadeIn(1000);
 
 $('header').ready(function(){
   $('header').css("background-color", "blue");
 })
 
 $('#fancy-text').ready(function(){
  $('#fancy-text').css("font-style", "italic");
 })
});
