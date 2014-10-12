class User < ActiveRecord::Base
  has_many :posted_tasks, class_name: "Task", foreign_key: :poster_id
  has_many :received_tasks, class_name: "Task", foreign_key: :receiver_id
end
