$("#prev-arrow-personal").click(function(){
    i = $(".selected-personal").index(".slides-personal")
    $(".slides-personal").removeClass("selected-personal")
    $(".slides-personal").eq(i-1).addClass("selected-personal")
    $(".dot-personal").removeClass("active")
    $(".dot-personal").eq(i-1).addClass("active")
});

$("#next-arrow-personal").click(function(){
    i = $(".selected-personal").index(".slides-personal")
    if(i >= $(".slides-personal").length-1){
        $(".slides-personal").removeClass("selected-personal")
        $(".slides-personal").eq(0).addClass("selected-personal")
        $(".dot-personal").removeClass("active")
        $(".dot-personal").eq(0).addClass("active")
        i = 0
    } else {
        $(".slides-personal").removeClass("selected-personal")
        i = i + 1
        $(".slides-personal").eq(i).addClass("selected-personal")
        $(".dot-personal").removeClass("active")
        $(".dot-personal").eq(i).addClass("active")
    }
});

$(".dot-personal").click(function(){
    x = $(".dot-personal").index(this)
    $(".slides-personal").removeClass("selected-personal")
    $(".slides-personal").eq(x).addClass("selected-personal")
    $(".dot-personal").removeClass("active")
    $(".dot-personal").eq(x).addClass("active")
});
