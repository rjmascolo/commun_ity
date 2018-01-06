
class Task < ApplicationRecord
  belongs_to :event
  belongs_to :user, optional: true

  def date_presentable
    self.event.start_date.strftime("%b %d, %Y, %I:%M %p")
  end

end
