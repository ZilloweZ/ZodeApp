require 'rails_helper'

RSpec.describe "ZoTis", type: :request do
  describe "GET /home" do
    it "returns http success" do
      get "/zo_ti/home"
      expect(response).to have_http_status(:success)
    end
  end

end
