class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :post

  validates :user, presence: true
  validates :post, presence: true
  validates :content, presence: true, length: {maximum: Settings.comment.content_max}
end
