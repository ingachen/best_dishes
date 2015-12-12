class CreateDishes < ActiveRecord::Migration
  def change
    create_table :dishes do |t|
      t.string :dish_name
      t.string :dish_category
      t.string :dish_coverphoto
      t.string :yelp_id

      t.timestamps null: false
    end
  end
end
