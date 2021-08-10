import SQLite from 'react-native-sqlite-storage';
import { db } from "./db";

export const updateDataBaseStructure = async() => {
    try {
        // v1
        await db.transaction(async tx => {
            await tx.executeSql(
                `CREATE TABLE IF NOT EXISTS Pokemon (id INT NOT NULL PRIMARY KEY DEFAULT 1, name TEXT NOT NULL,base_experience INT NOT NULL DEFAULT 0, height INT NOT NULL DEFAULT 0,weight INT NOT NULL DEFAULT 0, is_default BOOLEAN NOT NULL DEFAULT true, is_locked boolean NOT NULL DEFAULT true)`,
            );
        });

        console.log('Update DB stucture succefully');
    } catch (error) {
        console.info(error);
    }
};
