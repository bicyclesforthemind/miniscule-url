class AlterColumnUrlsMinisculeUrl < ActiveRecord::Migration[5.2]
  def change
    add_index :urls, :miniscule_url, unique: true
  end
end
