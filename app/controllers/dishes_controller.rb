class DishesController < ApplicationController
	def index
		# @business = Yelp.client.business('griddle-fresh-san-francisco').business
		# p @business.name
		# p @business.location

		@dishes = Dish.all

 		@dish_categories = @dishes.map(&:dish_category).uniq
 		@dish_cities = @dishes.map(&:city).uniq
		# @dish_categories = []

		# @dishes.each do |dish|
		# 	@dish_categories.push(dish.dish_category)
		# end

 		@dish_yelp_ids = @dishes.map(&:yelp_id)
	end

	def show
	end

	def new
		@dish = Dish.new
	end

	def create
		@dish = Dish.create(dish_params)
		redirect_to "/"
	end

private

	def dish_params
		params.require(:dish).permit(:dish_name, :dish_category, :yelp_id, :dish_coverphoto)
	end

end
