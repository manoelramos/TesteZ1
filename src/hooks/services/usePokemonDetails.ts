import { useEffect } from 'react';
import { usePokemonDetailsStore } from '@/stores/pokemons/usePokemonDetailsStore';
import { Alert } from 'react-native';

export function usePokemonDetails({
  url,
}: UsePokemonsDetails.Params): UsePokemonsDetails.PokemonDetailsHook {
  const { loading, details, loadPokemonDetails } = usePokemonDetailsStore();

  useEffect(() => {
    fetchPokemons();
  }, []);

  async function fetchPokemons() {
    try {
      await loadPokemonDetails(url);
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao tentar fazer a requisição');
    }
  }

  return {
    details,
    loading,
  };
}
