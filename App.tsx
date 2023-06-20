import { View, StyleSheet, Text, Alert, Platform } from "react-native";
import { Button } from "./components/Button";
import { TextInput } from "./components/TextInput";

export default function App() {
  const changeName = (text: string) => {
    console.log(text);
  };

  function onPressButton() {
    console.log("Botão pressionado");
    Alert.alert("Meu primeiro app", Platform.OS);
  }

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
        }}
      >
        Profissional React Native
      </Text>
      <TextInput
        autoCapitalize="none"
        placeholder="Digite seu e-mail"
        onChangeText={changeName}
      />

      <TextInput
        placeholder="Digite sua senha"
        secureTextEntry
        onChangeText={changeName}
      />

      <Button
        style={{ marginTop: 20 }}
        onPress={() => {
          console.log("Entrar");
        }}
        title="Entrar"
      />
      <Button
        style={{ marginTop: 10 }}
        onPress={() => {
          console.log("Criar uma conta");
        }}
        title="Criar uma conta"
        variant="secondary"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
