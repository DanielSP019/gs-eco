import React from "react";
import { View, Text, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import styles from "./styles";

export default function Home() {
  const route = useRoute();
  const { email } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={require("../../../assets/profile.png")} 
        />
      </View>
      <Text style={styles.text}>Nosso app foi feito para você compartilhar seu dia verde e sustentável. Seja bem-vindo(a) e, principalmente, seja verde e sustentável.</Text>
      <Text style={styles.text}>Email:</Text>
      <Text style={styles.email}>{email}</Text>
    </View>
  );
}
