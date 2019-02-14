import { createStore } from 'redux';

import rootReducer from '../reducers';

// TODO: Add redux thunk middleware.

const store = createStore(rootReducer);

export default store;