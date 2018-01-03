class CreatePuppies < ActiveRecord::Migration[5.1]
  def change
    create_table :puppies do |t|
      t.string :name
      t.string :breed
      t.string :imgURL

      t.timestamps
    end
  end
end
