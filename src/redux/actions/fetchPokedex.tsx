import { Dispatch } from 'react';
import { pokeApi } from '../../api/pokeApi';
import { addSimplePokemonListToDB } from '../../database/dbQueries';
import { executeQuery } from '../../helpers/executeQuery';
import { toSimplePokemonList } from '../../helpers/toSimplePokemonList';
import { PaginatedResponse } from '../../interfaces/paginatedResponseInterface';
import { PokedexItem, SimplePokemon } from '../../interfaces/pokemonInterfaces';
import { types } from '../types/types';

export const startFetchPokedexFromDB = () => {
    return async (dispatch: Dispatch<any>) => {
        const dbPokedexResultSet = await executeQuery('SELECT * FROM Pokemon');
        const pokeApiResponse = await pokeApi.get<PaginatedResponse>('https://pokeapi.co/api/v2/pokemon?limit=1');
        if (dbPokedexResultSet.rows.length < pokeApiResponse.data.count) {
            dispatch(startFetchPokedexFromPokeApi(pokeApiResponse.data.count));
        } else {
            const pokedexList: PokedexItem[] = [];
            dbPokedexResultSet.rows.raw().map(({ id, name, is_locked }: PokedexItem) => {
                pokedexList.push({ id, name, is_locked });
            });
            dispatch(setPokedex(pokedexList));
        }
    };
};

export const startFetchPokedexFromPokeApi = (limit: number = 1500) => {
    return async (dispatch: Dispatch<any>) => {
        try {
            const pokeApiResponse = await pokeApi.get<PaginatedResponse>(`https://pokeapi.co/api/v2/pokemon?limit=1500${ limit }`);
            const simplePokemonList = toSimplePokemonList(pokeApiResponse.data.results);

            await addSimplePokemonListToDB(simplePokemonList);
        } catch (error) {
            console.info('algo malio sal en startFetchPokedexFromPokeApi()');
            console.info(error);
        }
        dispatch(startFetchPokedexFromDB);
    };
};

export const setPokedex = (pokedexList: PokedexItem[]) => {
    return {
        type: types.updatePokedex,
        payload: [...pokedexList],
    };
};
