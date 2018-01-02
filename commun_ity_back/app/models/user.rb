class User < ApplicationRecord
  has_many :memberships
  has_many :communities, through: :memberships
  has_many :tasks
  has_many :events, through: :tasks
  has_secure_password

  def managing_communities
    managers = self.memberships.select { |membership| membership['member_type'] == 'manager'}
    managers.map {|manager| CommunitySerializer.new(manager.community)}
  end

  def user_events
    self.events.uniq
  end

  def member_of
    members = self.memberships.select { |membership| membership['member_type'] == 'member'}
    members.map {|member| CommunitySerializer.new(member.community)}
  end

end
