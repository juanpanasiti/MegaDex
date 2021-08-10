import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { PokedexItem } from '../../interfaces/pokemonInterfaces';
import { FadeInImage } from '../common/FadeInImage';

interface Props {
    pkmn: PokedexItem;
}

const PokemonItemList = ({ pkmn }: Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.numContainer}>
                <View style={styles.hashtagContainer}>
                    <Image source={require('../../assets/hashtag.png')} style={styles.imgHashtag} width={70} />
                </View>
                <Text style={styles.txtId}>{pkmn.id}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.txtName}>{pkmn.name}</Text>
                <Text style={styles.txtType}>Tipos</Text>
            </View>
            <View style={styles.imgContainer}>
                <FadeInImage
                    uri={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pkmn.id}.png`}
                    style={styles.pkmnImage}
                />
            </View>
        </View>
    );
};

export default PokemonItemList;

export const styles = StyleSheet.create({
    container: {
        borderColor: 'black',
        borderWidth: 1,
        margin: 2,
        borderRadius: 5,
        flexDirection: 'row',
        backgroundColor: 'lightgray',
    },
    numContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 70,
    },
    infoContainer: {
        flex: 1,
        paddingHorizontal: 10,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
    },
    imgContainer: {
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtName: {
        textTransform: 'capitalize',
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
    },
    txtType: {
        color: 'black',
        fontSize: 18,
    },
    txtId: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
    },
    pkmnImage: {
        width: 100,
        height: 100,
    },
    hashtagContainer: {
        width: 70,
        position: 'absolute',
        opacity: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgHashtag: {
        resizeMode: 'contain',
        tintColor: 'white',
        zIndex: 9999,
    },
});
