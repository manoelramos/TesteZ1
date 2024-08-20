import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      initialRouteName="(pokemon-list)"
      screenOptions={{ tabBarActiveTintColor: 'blue', headerShown: false }}>
      <Tabs.Screen
        name="(pokemon-list)"
        options={{
          title: 'Pokemons',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={24} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(pokemons-storaged)"
        options={{
          title: 'Capturados',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={24} name="save" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
