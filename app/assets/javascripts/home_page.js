$(function(){
	$(".banner-custom .banner .banner-slick").slick({
		autoplay:true,
		dots:true,
		dotsclass: "banner-dot",
		pauseOnHover:true,
		speed:500
	});
	$(".featured-product .product").slick({
		autoplay:true,
		slidesToShow:5
	})
})