require 'spec_helper'
require 'rails_helper'

RSpec.describe 'POST /signup', type: :request do
    let(:url) { '/signup' }
    let(:params) do 
        {
            user: {
                email: 'aaron@foundrymakes.com',
                password: 'RobertIsCool88'
            }
        }
    end

    context 'when user is signing up' do

        before { post url, params: params }

        it 'returns status code 200' do
            expect(response.status).to eq 200
        end

        it 'returns the new user' do
            user_json = JSON.parse(response.body)
            expect(user_json["email"]).to eq 'aaron@foundrymakes.com' 
        end
    end

    
end

RSpec.describe 'POST /login', type: :request do 
    let(:user) { User.create!(email: "aaron@foundrymakes.com", password: "RobertIsCool88") }
    let(:url) { '/login' }

    let(:params) do 
        {
            user: {
                email: user.email,
                password: user.password
            }
        }
    end

    context 'when user is logging in successfully' do
        before do 
            post url, params: params
        end

        it 'returns status code 200' do 
            expect(response.status).to eq 200
        end

        it 'returns a JWT' do
            expect(response.headers['Authorization']).to be_present
        end
    end 

end

RSpec.describe 'DELETE /logout', type: :request do
    let(:url) { '/logout' }

    context 'when user is logging out' do
        it 'returns status code 204' do 
            delete url
            expect(response).to have_http_status(204)
        end
    end
end