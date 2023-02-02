require 'rails_helper'

RSpec.describe "Products", type: :request do
  describe "GET /clock" do
    it "returns http success" do
      get "/products/clock"
      expect(response).to have_http_status(:success)
    end
  end

end
