$(function(){
let add = $('.add');
let remove = $('.remove');
let toggle = $('.toggle');
let box = $('.box');

add.on('click',function(){
 //box.show();
 //box.fadeIn();
 box.slideDown();
});

 remove.on('click',function(){
    //box.hide();
   // box.fadeOut();
   box.slideUp()
   });

   toggle.on('click',function(){
    //box.toggle();
    //box.fadeToggle();
    box.slideToggle();
   });

})