import React from 'react';
import Text from 'react-native';
import { act, create } from 'react-test-renderer';
import Movie from '../models/movie';
import MovieDetails from '../screens/MovieDetails';

describe('Testing movie details component', () => {
  it('Should display the title, duration, director, actors and plot of the movie', () => {
    let tree;
    const movie: Movie = {
      id: 1,
      actors: 'Peter',
      director: 'Boris',
      duration: '153',
      genres: ['drama'],
      plot: 'Silence',
      posterUrl: 'fakeurl',
      title: 'Gray silence',
      year: '2000',
    };
    act(() => {
      tree = create(<MovieDetails route={{ params: movie }} />);
    });
    const { root } = tree;

    expect(root.findByProps({ children: movie.title })).toBeTruthy();
    expect(root.findByProps({ children: movie.duration })).toBeTruthy();
    expect(root.findByProps({ children: movie.director })).toBeTruthy();
    expect(root.findByProps({ children: movie.actors })).toBeTruthy();
    expect(root.findByProps({ children: movie.plot })).toBeTruthy();
  });
});
