import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

export default function Post({ route }) {
  const { title, informa, imageUrl } = route.params || {};

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title ? title : "Title não fornecido"}</Text>
        <Text style={styles.text}>{informa}</Text>
      </View>
      {imageUrl !== "" && <Image source={{ uri: imageUrl }} style={styles.image} />}
    </View>
  );
}
