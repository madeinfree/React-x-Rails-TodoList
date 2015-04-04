class TodoListsController < ApplicationController

  def index
    @lists = TodoList.all.order("text ASC").to_json
  end

  def getData
    @lists = TodoList.all.order("text ASC").to_json
    render :json => @lists
  end

  def create
    list = TodoList.new(new_params)
    list.save
    render :nothing => true, :status => 200
  end

  def update
    list = TodoList.find(params[:id])
    list.update(update_params)
    render :nothing => true, :status => 200
  end

  def destroy
    list = TodoList.find(params[:id])
    list.destroy
    render :nothing => true, :status => 200
  end

  private

    def update_params
      params.permit(:text)
    end

    def new_params
      params.permit(:text)
    end

end
