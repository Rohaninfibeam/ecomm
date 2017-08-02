var Hadean = window.Hadean || { };
if (typeof Hadean.Product == "undefined") {
    Hadean.Product = {};
}
dd = null;
if (typeof Hadean.Product.tabs == "undefined") {
  Hadean.Product.tabs = {
    newFormId : '#new_cart_item',
    addToCart : true,

    initialize      : function() {
      $('#product_tabs .section-container section ').click(function() {
        //setTimeout('Hadean.Product.tabs.updateProductTabs()', 100);
      })
      //$('#product_tabs .section-container .section').first().find('a').click();
      //Hadean.Product.tabs.updateProductTabs();
    },
    updateProductTabs : function() {
      var heightOfTabContent = $('#product_tabs .section-container .section.active').height();
      if ( heightOfTabContent ) {
        $('#product_tabs .section-container').height(heightOfTabContent + 75);
      } else {
        $('#product_tabs .section-container').height(170);
        setTimeout('Hadean.Product.tabs.updateProductTabs()', 200);
      }
    }
  };
  jQuery(function() {
    Hadean.Product.tabs.initialize();
  });
};

$(function(){
  var variant_change= function(variant_id){
    $("#product-image [data-variant-id='"+variant_id+"']").removeClass("hide");
    $("#right_2_product_wrapper .variant-detail .variant-price-stock[data-variant-id='"+variant_id+"']").removeClass("hide");
  }

  $(".variant-select .properties img").first().addClass("selected");
  var a2 = [];
  var color = $(".variant-select .properties img.selected").attr("value")
  var a1 = color.split(" ").map(Number);
  a2.push(a1);
  $(".variant-select .properties select").each(function(){
    a2.push(JSON.parse($(this).val()));
  });
  variant_count={};
  a2 = Array.prototype.concat.apply([], a2);
  for(i=0,len=a2.length;i<len;i++){
    if(a2[i] in variant_count){
      variant_count[a2[i]]+=1;
    }
    else{
      variant_count[a2[i]]=0;
    }
  }
  max=0;variant_id=0;
  for (var key in variant_count) {
    if (variant_count.hasOwnProperty(key)) {
      if(parseInt(variant_count[key])>max){
        variant_id = key;
        max=variant_count[key]
      }
    }
  }
  variant_change(variant_id);
})
