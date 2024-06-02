import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#87CEEB",
    color: "#006400",
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    color: "#006400",
  },
  email: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#006400",
  },
  avatarContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50, // Deixa a imagem redonda
  },
});

export default styles;
