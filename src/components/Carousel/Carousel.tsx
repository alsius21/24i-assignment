import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

type Item = { title: string; assetUrl: string; id: number };
type Props = {
  title: string;
  items: Item[];
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});

export default function Carousel({ title, items }: Props) {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      {items.map((it: Item) => (
        <View key={it.id}>
          <Image
            source={{
              uri: it.assetUrl,
            }}
          />
          <Text>{it.title}</Text>
        </View>
      ))}
    </View>
  );
}
