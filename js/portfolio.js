$(function(){
  //풀스크린
  var count = 0;
  var ht = $(window).height();
  
  $(".dot li").click(function(e){
    e.preventDefault();
    ht = $(window).height();
    var i = $(this).index();
    count = i;
    var nowTop = count*ht;
    activation();

    
    $("html,body").stop().animate({"scrollTop":nowTop},800);
  });
  
  function activation(){
    $(".dot > li").removeClass("on").eq(count).addClass("on");
  }
  $(".dot > li:first").trigger("click")

  
  var secMax = $("section").length;
  $("#contain").on("wheel",function(e){
    ht = $(window).height();
    if($("html,body").is(":animated")){return false;}
    e.preventDefault();
    var delta = e.originalEvent.deltaY;
    if(delta < 1 && count >= 1){
      count--;
      $("html,body").animate({"scrollTop":ht*count},800);
    }else if(delta > 1 && count < secMax-1){
      count++;
      $("html,body").animate({"scrollTop":ht*count},800);
    }
    activation();
  });
});