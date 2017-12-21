class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :email
      t.string :first_name
      t.string :last_name
      t.string :profile_pic
      t.string :password_digest

      t.timestamps
    end
  end
end
