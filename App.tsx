import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Profissional React Native</Text>
      <View style={{ backgroundColor: "red" }}>
        <Image
          onLoad={({ nativeEvent }) => {
            console.log("width: ", nativeEvent.source.width);
            console.log("height: ", nativeEvent.source.height);
          }}
          resizeMode="contain"
          source={{ uri: "https://images.unsplash.com/photo-1661956602153-23384936a1d3" }}
          style={{ height: 300, width: 300 }}
        />
      </View>
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
