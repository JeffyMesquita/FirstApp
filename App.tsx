import { View, StyleSheet, Text, Alert, Platform } from "react-native";
import { Button } from "./components/Button";
import { TextInput } from "./components/TextInput";
import { List } from "./components/List";
import { login } from "./service/authService";

export default function App() {
  const changeName = (text: string) => {
    console.log(text);
  };

  async function onPressButton() {
    try {
      const token = await login('je_2742@hotmail.com', '123456');
      Alert.alert('Sucesso', `Token: ${token}`);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <List />

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
        onPress={onPressButton}
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
