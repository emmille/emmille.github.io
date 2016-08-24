$(document).ready(function(){
 $('button').click(function(){
   $('img').toggle();
 });
 $('p').fadeIn(2000);
 $('h1').fadeIn(1000);
 
 $('header').click(function(){
   $('header').css("background-color", "blue");
 })
 
 $('#fancy-text').click(function(){
  $('#fancy-text').css("font-style", "italic");
 })
});
