import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Movie from '../models/movie';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cover: {
    width: 400,
    height: 400,
  },
});

function MovieDetails({ route }) {
  const movie: Movie = route.params;
  return (
    <View style={styles.container}>
      <Image
        style={styles.cover}
        source={{
          uri: movie.posterUrl,
        }}
      />
      <Text>{movie.title}</Text>
      <Text>{movie.duration}</Text>
      <Text>{movie.director}</Text>
      <Text>{movie.actors}</Text>
      <Text>{movie.plot}</Text>
    </View>
  );
}

export default MovieDetails;
