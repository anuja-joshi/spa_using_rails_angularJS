class CreatePerformers < ActiveRecord::Migration
  def change
    create_table :performers do |t|
      t.string :name
      t.string :email
      t.string :age
      t.string :art
      t.timestamps
    end
  end
end
