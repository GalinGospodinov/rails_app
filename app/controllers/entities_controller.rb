class EntitiesController < ApplicationController

  def create
    @entity = Entity.new(entity_params)
    @entity.user_id = current_user.id
    if @entity.save
      redirect_to entities_path, :notice => "Successfully created location."
    else
      render :action => 'new'
    end
    @hash = Gmaps4rails.build_markers(@entity) do |entity, marker|
      marker.lat entity.latitude
      marker.lng entity.longitude
    end
  end

  def new
    @entity = Entity.new
  end

  def index
    @entity = Entity.all

    @hash = Gmaps4rails.build_markers(@entity) do |entity, marker|
      marker.lat entity.latitude
      marker.lng entity.longitude
    end
  end

  def show
    @entity = Entity.find(params[:id])
  end

  def destroy
    @entity = Entity.find(params[:id])
    @entity.destroy
    redirect_to :action => :index, status: 303  
  end
  
  private 
  def entity_params
    params.require(:entity).permit(:user_id, :address, :longitude, :latitude)
  end
end
