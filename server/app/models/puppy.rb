class Puppy < ApplicationRecord
  has_many :favorites

  def self.with_favorited(user_id)
    with_fav_count
      .joins('LEFT OUTER JOIN favorites ON favorites.puppy_id = puppies.id')
      .where('(favorites.user_id IS NULL OR favorites.user_id = ?)', user_id)
      .select('(favorites.id IS NOT NULL) AS favorited')
  end

  def with_fav_count
    with_favorited
      .where({id: id})
      .first
  end

  def with_favorited(user_id)
    Puppy.with_favorited(user_id)
      .where({id: id})
      .first
  end

  def self.with_fav_count
    Puppy
      .joins('LEFT OUTER JOIN (SELECT puppy_id, COUNT(*) AS total FROM favorites GROUP BY puppy_id) agg ON agg.puppy_id = puppies.id')
      .select(:id, :breed, :name, :imgURL, 'COALESCE(agg.total, 0) as total_favs')
  end
end
