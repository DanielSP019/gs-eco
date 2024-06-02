import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#87CEEB", // Cor de fundo azul celeste
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#006400", // Cor do título verde escuro
  },
  input: {
    width: "80%",
    height: 50,
    borderWidth: 1,
    borderColor: "#228B22", // Cor da borda verde floresta
    borderRadius: 10,
    marginBottom: 15,
    padding: 10,
    backgroundColor: "#F0FFF0", // Cor de fundo branca menta
  },
  button: {
    width: "80%",
    height: 50,
    backgroundColor: "#32CD32", // Cor do botão verde limão
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF", // Cor do texto branco
  },
});

export default styles;
