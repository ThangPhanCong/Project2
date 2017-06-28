require 'rails_helper'

RSpec.describe "static_pages/home.html.erb", type: :view do
  include RSpecHtmlMatchers
  it "has tags" do
    expect(rendered).to have_tag("div")
  end
end
