class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.belongs_to :user
      t.integer :review_rating
      t.string :review_content
      t.belongs_to :dish

      t.timestamps null: false
    end
  end
end
