class Article < ApplicationRecord
    # this inherited func validates data in field 'title'
    validates :title, presence: true, length: { minimum: 5 }

    # Added association with multiple Comments
    has_many :comments
end