class CreateCounterValues < ActiveRecord::Migration[5.0]
  def change
    create_table :counter_values do |t|
      t.integer :value

      t.timestamps
    end
  end
end
