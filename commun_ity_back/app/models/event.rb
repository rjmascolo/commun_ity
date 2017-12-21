class Event < ApplicationRecord
  belongs_to :community
  has_many :tasks
end
