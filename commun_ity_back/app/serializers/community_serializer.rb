class CommunitySerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :managers, :members, :location, :image_url, :events
  has_many :events

end
