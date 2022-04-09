class Api::GreetingsController < ApplicationController
  def index
    render json: Greeting.all
  end
end
