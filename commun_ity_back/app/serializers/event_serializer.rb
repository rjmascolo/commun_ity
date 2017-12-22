class EventSerializer < ActiveModel::Serializer
  attributes :id, :date, :name, :description
  belongs_to :community
  has_many :tasks
end
