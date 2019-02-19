class Url < ApplicationRecord
  belongs_to :user
  default_scope { order(hit_count: :desc) }
end
