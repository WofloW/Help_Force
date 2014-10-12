class Task < ActiveRecord::Base
  belongs_to :poster, class_name: "User"
  belongs_to :receiver, class_name: "User"
  belongs_to :category
end
