class Api::PuppiesController < ApplicationController
  def index
    render json: (current_user.nil? ? 
      Puppy.with_fav_count : 
      Puppy.with_favorited(current_user.id))
  end
end
