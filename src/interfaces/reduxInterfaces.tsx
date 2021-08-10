import { PokedexItem } from './pokemonInterfaces';

export interface MainState {
    pokedex: PokedexItem[];
}

export interface Action {
    type: string;
    payload?: any;
}

export interface PokedexAction extends Action {
    payload?: PokedexItem[];
}
