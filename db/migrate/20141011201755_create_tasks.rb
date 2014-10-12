class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.integer :poster_id
      t.integer :receiver_id
      t.string :description
      t.integer :price
      t.date :deadline
      t.integer :status_id

      t.timestamps
    end
  end
end
