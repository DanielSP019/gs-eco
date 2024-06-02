import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

export default function Create() {
  const navigation = useNavigation();
  const [title, setTitle] = useState("");
  const [informa, setInforma] = useState("");
  const [imageUrl, setImageUrl] = useState(""); 

  const handleCreatePost = () => {
    console.log("title:", title);
    console.log("informa:", informa);
    console.log("imageUrl:", imageUrl);
    navigation.navigate("Post", { title, informa, imageUrl });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Post</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        onChangeText={(text) => setTitle(text)}
        value={title}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Informa"
        onChangeText={(text) => setInforma(text)}
        value={informa}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Image URL"
        onChangeText={(text) => setImageUrl(text)}
        value={imageUrl}
      />
      {imageUrl !== "" && <Image source={{ uri: imageUrl }} style={{ width: 200, height: 200, marginBottom: 10 }} />}
      <TouchableOpacity style={styles.button} onPress={handleCreatePost}>
        <Text style={styles.buttonText}>Create Post</Text>
      </TouchableOpacity>
    </View>
  );
}
