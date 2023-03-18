
$(document).ready(function(){
  $(".class-resume-div").hide();
  $(".class-contact-div").hide(); 
  $(".class-about-div").hide();
  $(".class-home-click").css("border-color", "#0097e6");


  $(".class-resume-click").click(function(){
    $(".hello").hide("slow");
    $(".class-contact-div").hide(); 
    $(".class-about-div").hide();
    $(".class-resume-div").slideDown(800);
    $(".class-resume-click").css("border-color", "#0097e6");
    $(".class-home-click").css("border-color", "#ced6e0");
    $(".class-contact-click").css("border-color", "#ced6e0");
    $(".class-about-click").css("border-color", "#ced6e0");
    // $("object").attr('data', 'Resume.pdf');
  });

  $(".class-contact-click").click(function(){
    $(".hello").hide("slow");
    $(".class-resume-div").hide();
    $(".class-about-div").hide();
    $(".class-contact-div").slideDown(800);
    $(".class-contact-click").css("border-color", "#0097e6");
    $(".class-resume-click").css("border-color", "#ced6e0");
    $(".class-home-click").css("border-color", "#ced6e0");
    $(".class-about-click").css("border-color", "#ced6e0");
  });

  $(".class-about-click").click(function(){
    $(".hello").hide("slow");
    $(".class-resume-div").hide();
    $(".class-contact-div").hide();  
    $(".class-about-div").slideDown(800);
    $(".class-about-click").css("border-color", "#0097e6");
    $(".class-contact-click").css("border-color", "#ced6e0");
    $(".class-resume-click").css("border-color", "#ced6e0");
    $(".class-home-click").css("border-color", "#ced6e0");
  });

  $(".class-home-click").click(function(){
    $(".class-resume-div").hide();
    $(".class-contact-div").hide(); 
    $(".class-about-div").hide(); 
    $(".class-home-click").css("border-color", "#0097e6");
    $(".class-about-click").css("border-color", "#ced6e0");
    $(".class-contact-click").css("border-color", "#ced6e0");
    $(".class-resume-click").css("border-color", "#ced6e0");
    $(".hello").show("slow");
  });

});
