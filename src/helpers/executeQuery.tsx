import SQLite from 'react-native-sqlite-storage';
import { db } from '../database/db';


export const executeQuery = (query: string): Promise<SQLite.ResultSet> => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            try {
                tx.executeSql(query, [], (tx, results) => {
                    return resolve(results);
                });
            } catch (error) {
                console.info(error);
                return reject(error);
            }
        });
    });
};
