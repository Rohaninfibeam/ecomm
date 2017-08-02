$(function(){
	$("#check-zipcode").click(function(e){
		e.preventDefault();
		var pin = $("#pincode").val();
		$.ajax({
			url:'zipcode_availability',
			data:{pincode:pin},
			success: function (result) {
        		$("#pincode-message").html(result.message);
        		$("#pincode-message").removeClass("fail").addClass("success");
     		},
     		error: function (){
        		$("#pincode-message").html("Doesn't ship to your area");
        		$("#pincode-message").removeClass("success").addClass("fail");
     		}
		})
	});

	$(".container .product-image .product-image-large").slick({
		asNavFor:'.product-image-mini'
	});
	$(".container .product-image .product-image-mini").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.product-image-large',
		centerMode: true,
		focusOnSelect: true
	});
	$(".container .product-image .product-image-mini").on('mouseenter', '.slick-slide', function (e) {
		var $currTarget = $(e.currentTarget), 
    	index = $currTarget.data('slick-index'),
        slickObj = $('.container .product-image .product-image-large').slick('getSlick');
   		slickObj.slickGoTo(index);
	});
	$(".large_image").magnify();
})