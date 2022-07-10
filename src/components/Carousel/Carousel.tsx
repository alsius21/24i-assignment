import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

type Props = {
  title: string;
  items: { title: string; assetUrl: string }[];
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
      {items.map(it => (
        <>
          <Image
            source={{
              uri: it.assetUrl,
            }}
          />
          <Text>{it.title}</Text>
        </>
      ))}
    </View>
  );
}
