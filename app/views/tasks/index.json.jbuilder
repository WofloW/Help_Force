json.array!(@tasks) do |task|
  json.extract! task, :id, :poster_id, :receiver_id, :description, :price, :deadline, :status_id, :category_id
  json.url task_url(task, format: :json)
end
