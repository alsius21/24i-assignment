import React from 'react';
import { Text } from 'react-native';
import { act, create } from 'react-test-renderer';
import Carousel from '../components/Carousel/Carousel';

describe('Testing Carousel', () => {
  it('should display title when no item is provided', () => {
    let tree;
    act(() => {
      tree = create(<Carousel items={[]} title="Hello" />);
    });
    const { root } = tree;
    expect(root.findByType(Text)).toBeTruthy();
  });
});
