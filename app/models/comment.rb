class Comment < ApplicationRecord
  belongs_to :article  # Active record 'association'...
  # ...links Comments to one Article
end
