class AddRootUrlToUrls < ActiveRecord::Migration[5.2]
  def change
    add_column :urls, :root_url, :string
  end
end
