

var swiper = new Swiper('#banner_swiper',{   //banner
    autoplay: true,
})

var swiper = new Swiper('#main_2_swiper', {  //垂直切换广告
    direction: 'vertical',
    autoplay: true,
});






$(function(){
    $(".header_right").click(function(){
        $("ul").slideToggle();
    })
})


