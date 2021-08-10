import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector } from 'react-redux';
import { countPokemon } from '../database/dbQueries';
import { PokedexItem } from '../interfaces/pokemonInterfaces';
import { MainState } from '../interfaces/reduxInterfaces';

const TestScreen = () => {
    const state = useSelector<MainState, PokedexItem[]>(state => state.pokedex)

    const handleDispatch = () => {
        console.log('Pk en state', state.length)
    };
    return (
        <View>
            <Text>Test</Text>
            <Button onPress={countPokemon} title="count" />
            <View style={{height:40}}/>
            <Button onPress={handleDispatch} title="dispatch" />
        </View>
    );
};

export default TestScreen;
