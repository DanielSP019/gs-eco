import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#87CEEB",
    color: "#006400",
  },
  textContainer: {
    borderWidth: 1,
    borderColor: "#006400",
    padding: 10,
    marginBottom: 20,
    backgroundColor: "beige",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#006400",
    marginBottom: 5,
  },
  text: {
    fontSize: 18,
    color: "#006400",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
});

export default styles;
