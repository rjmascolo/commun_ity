class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :date, :image, :description, :volunteer_num, :description
  
  belongs_to :community
  has_many :tasks
end
