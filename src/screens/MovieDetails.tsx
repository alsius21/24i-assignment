import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Movie from '../models/movie';
import { themes } from '../utils/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.dark.base_background_color,
  },
  title: {
    color: themes.dark.base_contrast_color,
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    color: themes.dark.base_contrast_color,
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
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.text}>{movie.duration}</Text>
      <Text style={styles.text}>{movie.director}</Text>
      <Text style={styles.text}>{movie.actors}</Text>
      <Text style={styles.text}>{movie.plot}</Text>
    </View>
  );
}

export default MovieDetails;
