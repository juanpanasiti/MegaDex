import SQLite from 'react-native-sqlite-storage';

export const db = SQLite.openDatabase(
    {
        name: 'MegaDex.db',
        location: 'default',
    },
    () => {},
    error => {
        console.info(error);
    },
);
