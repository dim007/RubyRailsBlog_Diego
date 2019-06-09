class Article < ApplicationRecord
    # this inherited func validates data in field with given param
    validates :title, presence: true, length: { minimum: 5 }
end