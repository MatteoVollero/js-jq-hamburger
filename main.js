var hamburger = $(".header-right .fas");
var a = $(".header-right ");
var hide = false;


hamburger.click(
  function(){
    if(hide == false){
        hamburger.animate({opacity : 0});
        hide = true;
    }else{
        hamburger.animate({opacity : 1});
        hide = false;
    }

  }
);
