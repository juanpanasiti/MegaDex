import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { MainState } from '../interfaces/reduxInterfaces';
import { PokedexItem } from '../interfaces/pokemonInterfaces';
import PokemonItemList from '../components/pokedex/PokemonItemList';

const PokedexScreen = () => {
    const pokedex = useSelector<MainState, PokedexItem[]>(state => state.pokedex)
    
    return (
        <View>
            <FlatList 
                data={pokedex}
                showsVerticalScrollIndicator={false}
                keyExtractor={ pkmn => `${pkmn.id}`}
                renderItem={({item}) => <PokemonItemList pkmn={item} />}

            />
        </View>
    );
};

export default PokedexScreen;
