import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { fonts, spacing, themes } from '../../utils/styles';

type Item = { title: string; assetUrl: string; id: number };
type Props = {
  title: string;
  items: Item[];
  onClickCover(id: number): void;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingBottom: spacing.padding_bottom,
  },
  itemsContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  item: {
    flex: 1,
    flexDirection: 'column',
    marginBottom: spacing.padding_bottom,
    paddingRight: spacing.padding_right,
    paddingBottom: spacing.padding_bottom,
  },
  listTitle: {
    fontSize: fonts.h2,
    fontWeight: 'bold',
    color: themes.dark.base_highlight_color,
  },
  movieTitle: {
    fontSize: fonts.h4,
    color: themes.dark.base_contrast_color,
  },
  cover: {
    width: 300,
    height: 300,
    paddingBottom: spacing.padding_bottom,
  },
});

export default function Carousel({ title, items, onClickCover }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.listTitle}>{title}</Text>
      <ScrollView style={styles.itemsContainer} horizontal>
        {items.map((it: Item) => (
          <TouchableOpacity
            key={it.id}
            style={styles.item}
            onPress={() => onClickCover(it.id)}
          >
            <Image
              source={{
                uri: it.assetUrl,
              }}
              style={styles.cover}
            />
            <Text style={styles.movieTitle}>{it.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
