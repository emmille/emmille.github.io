$(document).ready(function(){
 $('button').click(function(){
   $('img').toggle();
 });
 $('p').fadeIn(2000);
 $('h1').fadeIn(1000);
 
 $('header').click(function(){
   $(this).css("background-color", "blue");
 })
 
 $('#fancy-text').click(function(){
  $(this).css("font-style", "italic");
 })
});
