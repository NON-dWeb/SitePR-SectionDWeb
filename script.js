$(title).ready(function(){
    function marqueePlay(){
        $("#home-big-title").animate(
            {
            left: $(window).width() - $("#home-big-title").width(),
            opacity: 0
            }, 10000, function(){
                $("#home-big-title").css("left", 0);
                $("#home-big-title").css("opacity", 1);
                marqueePlay();
            }
        );
    }
    marqueePlay();
}); 

