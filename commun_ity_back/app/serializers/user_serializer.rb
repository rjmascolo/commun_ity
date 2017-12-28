class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :first_name, :last_name, :managing_communities, :member_of, :profile_pic, :user_events
  has_many :tasks
  has_many :events

end
