Rails.application.routes.draw do
  devise_for :users,
             path: '',
             path_names: {
               sign_in: 'login',
               sign_out: 'logout',
               registration: 'signup'
             },
             controllers: {
               sessions: 'api/v1/sessions',
               registrations: 'api/v1/registrations'
             }

  get '/t/:miniscule_url', to: 'api/v1/urls#show'
  
  namespace :api do
   namespace :v1 do
    resources :urls
   end
  end

end
