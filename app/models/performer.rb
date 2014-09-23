class Performer < ActiveRecord::Base
 validates :name, :art, :email, :age, presence: true
 validates_numericality_of :age, less_than: 51 , greater_than: 9

  def as_json(options= {})
    super(only: [:id, :name, :email, :age, :art])
  end

end
