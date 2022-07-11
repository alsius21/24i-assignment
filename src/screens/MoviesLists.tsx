import React from 'react';
import { View, StyleSheet } from 'react-native';
import Carousel from '../components/Carousel/Carousel';
import useMovieLists from '../hooks/useMovieLists';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function MoviesLists() {
  const [movieLists] = useMovieLists();
  return (
    <View style={styles.container}>
      {movieLists.map(list => (
        <Carousel
          key={list.title}
          title={list.title}
          items={list.items.map(movie => ({
            title: movie.title,
            assetUrl: movie.posterUrl,
            id: movie.id,
          }))}
        />
      ))}
    </View>
  );
}

export default MoviesLists;
