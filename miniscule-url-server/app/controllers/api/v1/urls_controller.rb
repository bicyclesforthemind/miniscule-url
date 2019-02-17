module Api
    module V1
        class UrlsController < ApplicationController
            before_action :authenticate_user!

            def index
                # Get all the urls of the current user.
                @urls = current_user.urls
                render json: @urls
            end

            def create 
                # TODO: validate url and save
            end

            def show
                # TODO: redirect from short url
            end
        end
    end
end
