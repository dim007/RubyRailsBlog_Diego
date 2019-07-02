class CreateArticles < ActiveRecord::Migration[5.2]
  def change
    create_table :articles do |t|
      t.string :title
      t.text :cardText
      t.text :text
      t.text :textMid
      t.text :textBott
      t.timestamps
    end
  end
end
