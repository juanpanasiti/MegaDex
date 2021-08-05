import React from 'react'
import { View, Text } from 'react-native'
import { usePokeAPI } from '../hooks/usePokeAPI';

const PokedexScreen = () => {
    const { isLoading, data } = usePokeAPI('https://pokeapi.co/api/v2/pokemon')
    console.log(data)
    return (
        <View>
            <Text>Pokedex</Text>
            <Text>{isLoading ? 'cargando..' : JSON.stringify(data, null, 5)}</Text>

        </View>
    )
}

export default PokedexScreen
