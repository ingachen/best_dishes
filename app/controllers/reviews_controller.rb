class ReviewsController < ApplicationController
	def index
		@reviews = Review.all
	end

	def new
		@review = Review.new
	end

	def create
		@review = Dish.find(params[:dish_id]).reviews.create(review_params)

		if @review.valid?
			redirect_to :back
		else
			flash[:error] = "There was a problem saving the review."
			redirect_to :back
		end
	end


private
	def review_params
		params.require(:review).permit(:user_id, :review_rating, :review_content, :dish_id)		
	end
end
