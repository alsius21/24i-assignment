import React from 'react';
import { Text, Image } from 'react-native';
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
  it('should display a label and an image for each item', () => {
    let tree;
    act(() => {
      tree = create(
        <Carousel
          items={[{ assetUrl: 'fakeUrl', title: 'Hello', id: 1 }]}
          title="Hello"
        />,
      );
    });
    const { root } = tree;
    expect(root.findAllByType(Text).length).toEqual(2);
    expect(root.findByType(Image)).toBeTruthy();
  });
});
