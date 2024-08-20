import { useEffect } from 'react';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { ErrorBoundaryProps, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Text, View } from 'react-native';
import { Try } from 'expo-router/build/views/Try';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Try catch={ErrorBoundary}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack initialRouteName="(initial-tabs)">
          <Stack.Screen
            name="(initial-tabs)"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="(pokemon-details)"
            options={{
              title: 'Detalhes do Pokemon',
              headerBackTitle: 'Voltar',
            }}
          />
        </Stack>
      </ThemeProvider>
    </Try>
  );
}

export function ErrorBoundary({ error, retry }: ErrorBoundaryProps) {
  return (
    <View style={{ flex: 1, backgroundColor: 'red' }}>
      <Text>{error.message}</Text>
      <Text onPress={retry}>Tentar novamente</Text>
    </View>
  );
}
