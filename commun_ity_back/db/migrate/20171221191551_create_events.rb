class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.string :name
      t.date :date
      t.string :image
      t.integer :volunteer_num
      t.text :description
      t.integer :community_id

      t.timestamps
    end
  end
end