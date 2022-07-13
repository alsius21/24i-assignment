import React from 'react';
import { View, StyleSheet } from 'react-native';
import Carousel from '../components/Carousel/Carousel';
import useMovieLists from '../hooks/useMovieLists';
import Movie from '../models/movie';
import { themes } from '../utils/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.dark.base_background_color,
  },
});

function MoviesLists({ navigation }) {
  const [movieLists] = useMovieLists();
  const handleSelectMovie = (listIndex: number, movieId: number) => {
    const movie: Movie = movieLists[listIndex].items.find(
      mov => mov.id === movieId,
    );
    navigation.push('Movie', { ...movie });
  };
  return (
    <View style={styles.container}>
      {movieLists.map((list, index) => (
        <Carousel
          onClickCover={(id: number) => handleSelectMovie(index, id)}
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
