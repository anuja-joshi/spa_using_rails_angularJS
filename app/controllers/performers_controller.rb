class PerformersController < ApplicationController
  respond_to :html, :json

  def index
    @performer = Performer.all
    respond_with(@performer) do |format|
      format.json { render :json => @performer.as_json }
      format.html
    end
  end

  def create
    @performer = Performer.new(performer_params)
    if @performer.save
      render json: @performer.as_json, status: :ok
    else
      render json: {performer: @performer.errors, status: :no_content}
    end
  end

  private
  def performer_params
    params.fetch(:performer).permit(:name, :email, :age, :art)
  end

end
