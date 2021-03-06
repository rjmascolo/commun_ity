class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :start_date, :end_date, :image, :description, :volunteer_num, :description, :location, :tasks

  belongs_to :community
  has_many :tasks
end
