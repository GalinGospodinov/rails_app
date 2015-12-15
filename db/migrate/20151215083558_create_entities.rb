class CreateEntities < ActiveRecord::Migration
  def change
    create_table :entities do |t|
      t.integer :user_id, null: false
      t.string :address, null: false
      t.float :longitude
      t.float :latitude
      
      t.timestamps null: false
    end
      add_foreign_key :entities, :users, on_delete: :cascade
  end
end
