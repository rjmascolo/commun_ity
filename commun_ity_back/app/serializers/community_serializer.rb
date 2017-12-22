class CommunitySerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :managers, :members

end
