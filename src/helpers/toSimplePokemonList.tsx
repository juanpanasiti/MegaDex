import { SimplePokemon } from '../interfaces/pokemonInterfaces';
export const toSimplePokemonList = (list: SimplePokemon[]): SimplePokemon[] => {
    const completeList: SimplePokemon[] = [];
    if (list) {
        list.map(item => {
            const id = parseInt(item.url.split('/').slice(-2)[0]);
            completeList.push({
                id,
                name: item.name,
                url: item.url,
            });
        });
    }

    return completeList;
};
