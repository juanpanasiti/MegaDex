import { PokedexItem } from '../../interfaces/pokemonInterfaces';
import { PokedexAction } from '../../interfaces/reduxInterfaces';
import { types } from '../types/types';

export const pokedexReducer = (state: PokedexItem[] = [], action: PokedexAction) => {
    switch (action.type) {
        case types.updatePokedex:
            const list = action.payload || [];
            return [...list];
        default:
            return state;
    }
};
