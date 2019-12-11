class Api::ItemsController < ApplicationController
  before_action :set_department


  def index
    render json: @department.items.all 
  end

  def create
    @item = @department.items.new(item_params)
    if @item.save 
      render json: @item
    else 
      render json: @item.errors 
    end 
  end

  def update
    @item = Item.find(params[:id])
    if @item.update(item_params)
      render json: @item 
    else 
      render json: @item.errors 
    end 
  end

  def destroy
    @item = Item.find(params[:id])
    @item.destroy 
  end

  private

  def set_department
    @department = Department.find(params[:department_id])
  end

  def item_params
    params.require(:item).permit(:name, :description, :cost)
  end

end
