class MembershipSerializer < ActiveModel::Serializer
  attributes :id, :member_type, :user_id, :community_id
  
  belongs_to :user
  belongs_to :community
end
