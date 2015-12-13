class Dish < ActiveRecord::Base
	has_many :reviews

	def average_rating
		return 0 if !has_reviews?

		ratings = reviews.map{ |review| review.review_rating }
		ratings_sum = 0
		ratings.each {|rating| ratings_sum = ratings_sum + rating }
		ratings_sum / reviews.count
		# reviews.map(&:review_rating).reduce(&:+)  / reviews.count
	end

	def display_average_rating
		has_reviews? ? "#{average_rating} / 10" : "None"
	end

	def has_reviews?
		!reviews.empty?
	end

	def business
		@business ||= Yelp.client.business(yelp_id).business
	end

	def dishes_by_category
		@dishes = Dish.where(dish_category: "Pancakes")
	end

end
