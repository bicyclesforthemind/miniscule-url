require 'rails_helper'

RSpec.describe 'GET /api/v1/urls', type: :request do
    let(:user) { User.create!(email: "aaron@foundrymakes.com", password: "RobertIsCool88") }
    let(:url) { Url.create!(original_url: 'https://www.foundrymakes.com', miniscule_url: 'abcdef', root_url: 'http://localhost:3000/', hit_count: 0, user: user) }

    context 'when getting existing miniscule urls' do
        before do 
            post '/login', params: { user: { email: user.email, password: user.password }}
            get '/api/v1/urls', headers: { 'Authorization' => response.headers['Authorization'] } 
        end
        
        it 'returns status code 200' do
            expect(response.status).to eq 200
        end
    end
end

RSpec.describe 'POST /api/v1/urls', type: :request do
    let(:user) { User.create!(email: "aaron@foundrymakes.com", password: "RobertIsCool88") }
    let(:original_url) { 'https://www.foundrymakes.com' }
    let(:params) do
        { 
            original_url: original_url
        }
    end

    context 'when creating a new miniscule url' do
        before do 
            post '/login', params: { user: { email: user.email, password: user.password }}
            post '/api/v1/urls', params: params, headers: { 'Authorization' => response.headers['Authorization'] } 
        end

        it 'returns status code 200' do
            expect(response.status).to eq 200
        end

        it 'has matching original url' do
            url_json = JSON.parse(response.body)
            expect(url_json["original_url"]).to eq original_url
        end
    end 
end

RSpec.describe 'GET /t/:miniscule_url', type: :request do 
    let(:user) { User.create!(email: "aaron@foundrymakes.com", password: "RobertIsCool88") }
    let(:url) { Url.create!(original_url: 'https://www.foundrymakes.com', miniscule_url: 'abcdef', root_url: 'http://localhost:3000/', hit_count: 0, user: user) }

    context 'when using a miniscule url' do 
        before do 
            get '/t/abcdefg'
        end

        it 'returns status code 404 when url not found' do 
            expect(response.status).to eq 404
        end
    end
end