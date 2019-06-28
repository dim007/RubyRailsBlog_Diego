class Article < ApplicationRecord
    # Added association with multiple Comments
    # Destroys associated comments w/ a given article
    has_many :comments, dependent: :destroy

    # Article Image added
    has_one_attached :picture, dependent: :destroy
    has_one_attached :pictureMid, dependent: :destroy
    has_one_attached :pictureBott, dependent: :destroy

    # this inherited func validates data in field 'title'
    validates :title, presence: true, length: { minimum: 5 }
end