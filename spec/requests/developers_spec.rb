require 'rails_helper'

RSpec.describe "Developers", type: :request do
  describe "GET /home" do
    it "returns http success" do
      get "/developers/home"
      expect(response).to have_http_status(:success)
    end
  end

end
