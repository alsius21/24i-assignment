import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MoviesLists from './src/screens/MoviesLists';
import MovieDetails from './src/screens/MovieDetails';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
        }}
      >
        <Stack.Screen name="Home" component={MoviesLists} />
        <Stack.Screen name="Movie" component={MovieDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
