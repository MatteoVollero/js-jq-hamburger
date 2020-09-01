var hamburger = $("i");
var a = $("a");
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
