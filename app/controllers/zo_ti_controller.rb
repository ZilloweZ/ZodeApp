class ZoTiController < ApplicationController
  def home
  end
  require 'net/http'
  require 'json'

  def show
    @prompt = params[:prompt]

    uri = URI("https://afraid-glasses-drum-34-142-235-206.loca.lt/text2img/")
    params = { :prompt => @prompt }
    uri.query = URI.encode_www_form(params)

    response = Net::HTTP.get_response(uri)

    begin
      @image = JSON.parse(response.body)["image"]
    rescue JSON::ParserError => error
      return render json: { error: error.message }, status: :bad_request
    end

    respond_to do |format|
      format.html
      format.json { render json: @image }
    end
  end
end
