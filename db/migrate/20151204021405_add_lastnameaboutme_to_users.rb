class AddLastnameaboutmeToUsers < ActiveRecord::Migration
  def change
    add_column :users, :last_name, :string
    add_column :users, :about_me, :string
  end
end
