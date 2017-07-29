class ProductsIndex < Chewy::Index
	define_type Product.includes(:variants) do
		field :name,:description
		field :variants do
			field :name
			field :sku
		end
	end
end