class Api::FavoritesController < ApplicationController
  before_action :get_puppy
  before_action :authenticate_user, only: [:create, :delete]

  def index
    render json: @puppy.favorites
  end

  def create
    if !@puppy.favorites.exists? user: current_user
      @puppy.favorites.create user: current_user
    end
    render json: @puppy.with_favorited(current_user.id)
  end

  def delete
    @puppy.favorites.where(user: current_user).destroy_all
    render json: @puppy.with_favorited(current_user.id)
  end

  private
  def get_puppy
    p params
    @puppy = Puppy.find params[:puppy_id]
  end
end
