class CommunitySerializer < ActiveModel::Serializer
  attributes :id, :name, :description

  has_many :memberships
  has_many :users, through: :memberships
  has_many :events

end
