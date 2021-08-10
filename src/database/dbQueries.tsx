import SQLite from 'react-native-sqlite-storage';
import { executeQuery } from '../helpers/executeQuery';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { db } from './db';

export const deleteTable = (table: string) => {};

export const addSimplePokemonListToDB = async (simplePokemonList: SimplePokemon[]) => {
    const searchPromises: Promise<SQLite.ResultSet>[] = [];
    const insertPromises: Promise<SQLite.ResultSet>[] = [];
    simplePokemonList.map(simplePkmn => {
        searchPromises.push(executeQuery(`SELECT id FROM Pokemon WHERE id = ${simplePkmn.id}`));
    });
    Promise.all(searchPromises).then(values => {
        values.map((value, i) => {
            if (value.rows.length === 0) {
                const pkmn = simplePokemonList[i];
                insertPromises.push(executeQuery(`INSERT INTO Pokemon (id, name) VALUES (${pkmn.id},'${pkmn.name}')`));
            }
        });
    });
    try {
        await Promise.all(insertPromises);
    } catch (error) {
        console.info('Algo malio sal al insertar en la tabla');
        console.info(error);
    }
};

export const countPokemon = async () => {
    try {
        const result = await executeQuery('SELECT * FROM Pokemon');
        console.log('Pk en la DB:',result.rows.length)
    } catch (error) {
        console.info('error en count');
    }
};

export const newPokemon = async (id: number, name: string) => {
    await db.transaction(async tx => {
        try {
            const result = await tx.executeSql(`INSERT INTO Pokemon (id, name) VALUES (?,?)`, [id, name]);
        } catch (error) {
            console.info('error');
            console.info(error);
        }
    });
};
