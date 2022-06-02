$("#prev-arrow-teacher").click(function(){
    i = $(".selected-teacher").index(".slides-teacher")
    $(".slides-teacher").removeClass("selected-teacher")
    $(".slides-teacher").eq(i-1).addClass("selected-teacher")
    $(".dot-teacher").removeClass("active")
    $(".dot-teacher").eq(i-1).addClass("active")
});

$("#next-arrow-teacher").click(function(){
    i = $(".selected-teacher").index(".slides-teacher")
    if(i >= $(".slides-teacher").length-1){
        $(".slides-teacher").removeClass("selected-teacher")
        $(".slides-teacher").eq(0).addClass("selected-teacher")
        $(".dot-teacher").removeClass("active")
        $(".dot-teacher").eq(0).addClass("active")
        i = 0
    } else {
        $(".slides-teacher").removeClass("selected-teacher")
        i = i + 1
        $(".slides-teacher").eq(i).addClass("selected-teacher")
        $(".dot-teacher").removeClass("active")
        $(".dot-teacher").eq(i).addClass("active")
    }
});

$(".dot-teacher").click(function(){
    x = $(".dot-teacher").index(this)
    $(".slides-teacher").removeClass("selected-teacher")
    $(".slides-teacher").eq(x).addClass("selected-teacher")
    $(".dot-teacher").removeClass("active")
    $(".dot-teacher").eq(x).addClass("active")
});