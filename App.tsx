import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Alert,
  Platform,
  TouchableHighlight,
  TouchableOpacity,
  Pressable,
} from "react-native";

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
        multiline
        placeholder="Digite seu nome"
        onChangeText={changeName}
        placeholderTextColor="#ddd"
        style={styles.textInput}
      />
      <TouchableHighlight
        onPressIn={() => console.log("onPressIn")}
        underlayColor={"#550ab1"}
        style={styles.button}
        onPress={() => console.log("Hightlight pressionado")}
      >
        <Text style={styles.buttonTitle}>Highlight</Text>
      </TouchableHighlight>
      <TouchableOpacity
        onPressOut={() => console.log("onPressOut")}
        activeOpacity={0.7}
        style={styles.button}
        onPress={() => console.log("Opacity pressionado")}
      >
        <Text style={styles.buttonTitle}>Opacity</Text>
      </TouchableOpacity>
      <Pressable
        delayLongPress={1000}
        onLongPress={() => console.log("onLongPress")}
        style={styles.button}
        onPress={() => console.log("pressable pressionado")}
      >
        <Text style={styles.buttonTitle}>Pressable</Text>
      </Pressable>
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
  textInput: {
    paddingHorizontal: 10,
    borderWidth: 1,
    height: 50,
    width: 250,
    marginTop: 10,
    color: "#550ab1",
    fontWeight: "bold",
    fontSize: 18,
  },
  button: {
    height: 50,
    width: 200,
    backgroundColor: "#1D013F",
    borderRadius: 12,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});
