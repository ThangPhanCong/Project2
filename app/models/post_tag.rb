class PostTag < ApplicationRecord
  belongs_to :post
  belongs_to :tag

  validates :post, numericality: {only_integer: true}
  validates :tag, numericality: {only_integer: true}
end
