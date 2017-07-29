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
})