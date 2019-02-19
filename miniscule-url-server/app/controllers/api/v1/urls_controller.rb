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
                if valid_url?(params[:original_url])
                    @url = Url.new(original_url: params[:original_url], root_url: request.base_url, hit_count: 0)
                    @url.user = current_user
                    @url.miniscule_url = generate_miniscule_url

                    if @url.save
                        render json: @url
                    else
                        render json: {
                            errors: [
                                status: '400',
                                title: 'Bad Request',
                                detail: 'Invalid URL'
                            ]
                        }, status: :bad_request
                    end
                else
                    render json: {
                        errors: [
                            status: '400',
                            title: 'Bad Request',
                            detail: 'Invalid URL'
                        ]
                    }, status: :bad_request
                end
            end

            def show
                # navigate to new url and increment hit count.
                @url = Url.find_by(miniscule_url: params[:miniscule_url])
                if @url
                    @url.hit_count += 1
                    @url.save
                    redirect_to @url.original_url
                else 
                    render json: {
                        errors: [
                            status: '404',
                            title: 'Not Found',
                            detail: 'Invalid URL'
                        ]
                    }, status: :not_found
                end
            end

            private

            def generate_miniscule_url
                SecureRandom.urlsafe_base64(6)
            end

            def valid_url?(url)
                # check if url is valid or not
                uri = URI.parse(url)
                (uri.kind_of?(URI::HTTP) || uri.kind_of?(URI::HTTPS)) && !uri.host.nil?
            rescue URI::InvalidURIError
                false
            end
        end
    end
end
