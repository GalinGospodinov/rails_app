class EntitiesController < ApplicationController

  def create
    @entity = Entity.new(entity_params)

    if @entity.save
      redirect_to entities_path, :notice => "Successfully created location."
    else
      render :action => 'new'
    end
  end

  def new
    @entity = Entity.new
  end

  def index
    @entity = Entity.all
  end

  private 
  def entity_params
    params.require(:entity).permit(:address, :longitute, :latitude)
  end
end
