class Comment < ApplicationRecord
  belongs_to :article  # Active record 'association'...
  # ...links Comments to one Article
  validates :body, presence: true, length: { minimum: 5 }
  validates :commenter, presence: true, length: {minimum: 1}
end
