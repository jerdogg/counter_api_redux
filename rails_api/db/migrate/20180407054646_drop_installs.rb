class DropInstalls < ActiveRecord::Migration[5.0]
  def change
    drop_table :counter_values
  end
end
