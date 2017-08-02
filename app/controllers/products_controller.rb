class ProductsController < ApplicationController

  def search
  
  end

  def index
    products = Product.active.includes(:variants)

    product_types = nil
    if params[:product_type_id].present? && product_type = ProductType.find_by_id(params[:product_type_id])
      product_types = product_type.self_and_descendants.map(&:id)
    end
    if product_types
      @products = products.where(product_type_id: product_types)
    else
      @products = products
    end
  end

  def create
    if params[:q] && params[:q].present?
      @products = Product.standard_search(params[:q]).results
    else
      @products = Product.where('deleted_at IS NULL OR deleted_at > ?', Time.zone.now )
    end

    render :template => '/products/index'
  end

  def show
    @product = Product.friendly.active.find(params[:id])
    @properties = @product.get_property_hash
    form_info
    @cart_item.variant_id = @product.active_variants.first.try(:id)
    render 'show_new'
  end

  def zipcode_availability
    pincode = Zipcode.find_by_pincode(params[:pincode])
    if pincode.present?
      render :json=>{:success=>true,:message=>"Ships to your area"}
    else
      render :json=>{:success=>false,:message=>"Doesn't ship to your area"}
    end
  end

  private

  def form_info
    @cart_item = CartItem.new
  end

  def featured_product_types
    [ProductType::FEATURED_TYPE_ID]
  end
end
