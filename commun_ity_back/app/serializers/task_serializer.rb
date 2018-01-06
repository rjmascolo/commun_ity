class TaskSerializer < ActiveModel::Serializer

  attributes :id, :description, :event, :completed, :user, :date_presentable

  belongs_to :event
  belongs_to :user
end
