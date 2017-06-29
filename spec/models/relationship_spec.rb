require 'rails_helper'

RSpec.describe Relationship, type: :model do
  describe "validations" do
    it{expect :follower_id}
    it{expect :followed_id}
  end
end
