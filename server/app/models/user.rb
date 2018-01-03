class User < ApplicationRecord
  has_secure_password
  validates_uniqueness_of :email
  has_many :favorites
  has_many :puppies, through: :favorites
end
