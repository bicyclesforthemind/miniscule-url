class ApplicationController < ActionController::API
    def render_json_resource(resource)
        if resource.errors.empty?
            render json: resource
        else
            render_json_errors(resource)
        end
    end

    def render_json_errors(resource)
        render json: {
            errors: [
                status: '400',
                title: 'Bad Request',
                detail: resource.errors
            ]
        }, status: :bad_request
    end
end
