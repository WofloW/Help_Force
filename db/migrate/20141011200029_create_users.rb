class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.integer :poster_point
      t.integer :receiver_point

      t.timestamps
    end
  end
end
