class CreateTasks < ActiveRecord::Migration[5.1]
  def change
    create_table :tasks do |t|
      t.string :name
      t.string :description
      t.integer :event_id
      t.integer :user_id

      t.timestamps
    end
  end
end
