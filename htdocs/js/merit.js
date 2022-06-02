$(document).ready(function(){
   if($(window).width() > 800)
   {
    $(".merit-badge").children(".text-container").animate({
        opacity: "toggle"
    })
   }
});


$(".merit-badge").click(function(){
    if($(window).width() > 800)
    {
        x = $(".merit-badge").index(this)
        $(".merit-badge").eq(x).children(".text-container").animate({
            opacity: "toggle"
        })
    } 
});