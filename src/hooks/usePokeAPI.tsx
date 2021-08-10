import { useEffect } from 'react';
import { useState } from 'react';
import { pokeApi } from '../api/pokeApi';
import { useToast } from './useToast';

export const usePokeAPI = <T,>(url: string) => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState<T>({} as T);
    const { showToast } = useToast();

    const loadData = async () => {
        try {
            const response = await pokeApi.get<T>(url);
            setData(response.data);
            setIsLoading(false);
        } catch (error) {
            console.info(error);
            showToast('Ups! Algo malió sal en usePokeAPI()');
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    return {
        isLoading,
        data,
    };
};
