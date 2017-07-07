class Post < ApplicationRecord
  belongs_to :user
  default_scope -> { order(created_at: :desc) }
  scope :search, ->q{where "title LIKE ?", "%#{q}%"}
  is_impressionable

  has_many :post_tags, dependent: :destroy
  has_many :tags, through: :post_tags
  has_many :comments, dependent: :destroy

  validates :user, presence: true
  validates :title, presence: true, length: {maximum: Settings.post.title_max}

  def all_tags=names
    self.tags = names.split(",").map do |name|
      Tag.where(name: name.strip).first_or_create!
    end
  end

  def all_tags
    tags.map(&:name).join(", ")
  end
end
