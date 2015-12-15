class AddForeignKey < ActiveRecord::Migration
  def change
    drop_table :entities
  end
end
