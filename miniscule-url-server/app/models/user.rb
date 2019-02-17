class User < ApplicationRecord
  has_many :urls

  devise :database_authenticatable, 
         :jwt_authenticatable,
         :registerable, 
         :validatable,
         jwt_revocation_strategy: JWTBlacklist
end
