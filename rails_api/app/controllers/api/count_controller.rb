class Api::CountController < ApplicationController

  def index
    render json: Counter.first
  end

  def update
    if params[:counter] === 'DEC'
      Counter.first.update(data: Counter.first.data-1)
    elsif params[:counter] === 'INC'
      Counter.first.update(data: Counter.first.data+1)
    end
    render json: Counter.first
  end

  def value_param
    params.require(:counter)
  end
end

# what is permit?
# params.require(:counter).permit(:counter)