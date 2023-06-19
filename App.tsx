import { StyleSheet, Text, View, Image, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text 
        style={{
          fontSize: 25,
          fontWeight: "bold",
        }}
      >Profissional React Native</Text>
      <TextInput
        autoCapitalize="none"
        multiline
        placeholder="Digite seu nome"
        // onChange={(e) => {
        //   console.log(e.nativeEvent.text);
        // }}
        onChangeText={(text) => {
          console.log(text);
        }}
        placeholderTextColor="#ddd"
        style={{
          paddingHorizontal	: 10,
          borderWidth: 1,
          height: 50,
          width: 250,
          marginTop: 10,
          color: "#550ab1",
          fontWeight: "bold",
          fontSize: 18,
        }}
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
