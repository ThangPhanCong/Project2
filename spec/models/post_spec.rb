require 'rails_helper'

RSpec.describe Post, type: :model do
  context "association" do
    it {expect have_many :comments}
    it {expect have_many :post_tags}
    it {expect have_many :tags}
    it {is_expected.to belong_to :user}
  end
end
