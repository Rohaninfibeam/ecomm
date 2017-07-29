class CustomProductsController < ApplicationController
  def new
  	
  	@product = Product.new
  end

  def edit
  end

  def upload_image
  end
end
