class Favorite < ApplicationRecord
  belongs_to :puppy
  belongs_to :user
end
