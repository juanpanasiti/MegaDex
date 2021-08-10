import React from 'react';
import { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { PokedexItem } from '../interfaces/pokemonInterfaces';
import { MainState } from '../interfaces/reduxInterfaces';
import { startFetchPokedexFromDB } from '../redux/actions/fetchPokedex';

const HomeScreen = () => {
    const dispatch = useDispatch();
    const pokedex = useSelector<MainState, PokedexItem[]>(state => state.pokedex);
    useEffect(() => {
        dispatch(startFetchPokedexFromDB());
    }, []);
    return (
        <View>
            <Text>Home</Text>
            <Text>{pokedex.length}</Text>
        </View>
    );
};

export default HomeScreen;
