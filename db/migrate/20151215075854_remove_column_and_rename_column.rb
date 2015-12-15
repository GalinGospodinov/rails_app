class RemoveColumnAndRenameColumn < ActiveRecord::Migration
  def change
    remove_column :entities, :user_id
    rename_column :entities, :longitute, :longitude
  end
end
