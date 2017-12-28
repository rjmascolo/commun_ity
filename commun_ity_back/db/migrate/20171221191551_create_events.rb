class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.string :name
      t.datetime :start_date
      t.datetime :end_date
      t.string :image
      t.integer :volunteer_num
      t.text :description
      t.string :location
      t.integer :community_id

      t.timestamps
    end
  end
end
