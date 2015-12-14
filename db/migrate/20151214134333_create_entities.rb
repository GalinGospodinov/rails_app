class CreateEntities < ActiveRecord::Migration
  def change
    create_table :entities do |t|
      t.string :address
      t.float :longitute
      t.float :latitude
      t.integer :user_id
      t.foreign_key :users

      t.timestamps null: false
    end
  end
end
