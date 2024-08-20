import { useEffect } from 'react';
import { usePokemonStore } from '@/stores/pokemons/usePokemonStore';
import { Alert } from 'react-native';

export function usePokemons(): UsePokemons.PokemonsHook {
  const { pokemonList, loadPokemonList, offset, loading } = usePokemonStore();

  useEffect(() => {
    fetchPokemons();
  }, []);

  async function fetchPokemons() {
    if (loading || offset === null) return;

    try {
      await loadPokemonList(offset);
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao tentar fazer a requisição');
    }
  }

  return {
    pokemonList,
    loading,
    fetchMorePokemons: fetchPokemons,
  };
}
