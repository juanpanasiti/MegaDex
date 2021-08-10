import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { pokedexReducer } from '../reducers/pokedexReducer';

const reducers = combineReducers({
    pokedex: pokedexReducer,
});
export const store = createStore(reducers, applyMiddleware(thunk));
