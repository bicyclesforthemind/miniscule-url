module Api
    module V1
        class UrlsController < ApplicationController
            before_action :authenticate_user!, except: [:show]

            def index
                # Get all the urls of the current user.
                @urls = current_user.urls
                render json: @urls
            end

            def create 
                # TODO: verify url
                @url = Url.new(original_url: params[:original_url], root_url: request.base_url, hit_count: 0)
                @url.user = current_user
                @url.miniscule_url = generate_miniscule_url

                if @url.save
                    render json: @url
                else
                    render json: {}.to_json #TODO: add error
                end
            end

            def show
                @url = Url.find_by(miniscule_url: params[:miniscule_url])
                @url.hit_count += 1
                @url.save
                redirect_to @url.original_url
            end

            private

            def generate_miniscule_url
                SecureRandom.urlsafe_base64(6)
            end
        end
    end
end
