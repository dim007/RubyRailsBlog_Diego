class Article < ApplicationRecord
    # Added association with multiple Comments
    # Destroys associated comments w/ a given article
    has_many :comments, dependent: :destroy

    # this inherited func validates data in field 'title'
    validates :title, presence: true, length: { minimum: 5 }
end