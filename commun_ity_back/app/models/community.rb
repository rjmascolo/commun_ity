class Community < ApplicationRecord
  has_many :memberships
  has_many :users, through: :memberships
  has_many :events

  def managers
    managers = self.memberships.select { |membership| membership['member_type'] == 'manager'}
    managers.map {|manager| manager.user.slice(:id, :first_name, :last_name, :profile_pic)}
  end

  def members
    members = self.memberships.select { |membership| membership['member_type'] == 'member'}
    members.map {|member| member.user.slice(:id, :first_name, :last_name, :profile_pic)}
  end
end
