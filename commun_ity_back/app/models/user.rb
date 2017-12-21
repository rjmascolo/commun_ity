class User < ApplicationRecord
  has_many :memberships
  has_many :communities, through: :memberships
  has_many :tasks
  has_many :events, through: :tasks
  has_secure_password
  
end
