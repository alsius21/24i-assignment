import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
  },
  itemsContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  item: {
    flex: 1,
    flexDirection: 'column',
    paddingRight: '5',
    paddingBottom: '5',
  },
  cover: {
    width: 300,
    height: 300,
  },
});

export default function Carousel({ title, items, onClickCover }: Props) {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
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
            <Text>{it.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
