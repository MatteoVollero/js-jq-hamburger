var hamburger = $(".header-right .fas");
var a = $(".header-right a");
var hide = false;

a.css("width",69);


a.click(
  function(){
    if(hide == false){
      hamburger.fadeOut("slow");
      hide = true;
    }else {
      hamburger.fadeIn("slow");
      hide = false;
    }
  }
);
