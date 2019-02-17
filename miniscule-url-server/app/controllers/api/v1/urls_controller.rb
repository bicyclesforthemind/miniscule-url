module Api
    module V1
        class UrlsController < ApplicationController
            before_action :authenticate_user!

            
        end
    end
end
