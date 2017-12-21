class User < ApplicationRecord
  has_many :memberships
  has_many :communities, through: :memberships
  has_many :tasks
  has_many :events, through: :tasks
  has_secure_password

  def managing_communities
    byebug
    managers = self.memberships.select { |membership| membership['member_type'] == 'manager'}
    managers.map {|manager| manager.community}
  end

  def member_of
    members = self.memberships.select { |membership| membership['member_type'] == 'member'}
    members.map {|member| member.community}
  end
  
end
