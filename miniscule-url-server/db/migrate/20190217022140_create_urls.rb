class CreateUrls < ActiveRecord::Migration[5.2]
  def change
    create_table :urls do |t|
      t.string :original_url
      t.string :miniscule_url
      t.integer :hit_count
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
