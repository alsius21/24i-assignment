import React from 'react';
import { act, create } from 'react-test-renderer';

import Carousel from '../components/Carousel/Carousel';
import Movie from '../models/movie';
import MoviesLists from '../screens/MoviesLists';

let mockMoviesLists;
let mockIsLoadingLists;
jest.mock('../../src/hooks/useMovieLists', () => {
  return jest
    .fn()
    .mockImplementation(() => [mockMoviesLists, mockIsLoadingLists]);
});

describe('Testing useMovieLists', () => {
  it('should get the list of movies', () => {
    // given
    const movie: Movie = {
      id: 1,
      actors: 'Hans',
      director: 'Peter',
      duration: '159',
      genres: ['drama'],
      plot: 'Lost in an island',
      posterUrl: '',
      title: 'Island',
      year: '1999',
    };
    mockMoviesLists = [{ title: 'Recommended', items: [movie] }];
    mockIsLoadingLists = false;

    let tree;
    act(() => {
      tree = create(<MoviesLists />);
    });
    const { root } = tree;
    expect(root.findAllByType(Carousel).length).toBe(1);
  });
});
