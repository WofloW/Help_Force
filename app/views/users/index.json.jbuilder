json.array!(@users) do |user|
  json.extract! user, :id, :poster_point, :receiver_point
  json.url user_url(user, format: :json)
end
