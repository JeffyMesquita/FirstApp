import { View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#EEE",
        flex: 1,
        flexWrap: "wrap",
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
        gap: 20,
      }}
    >
      <View
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
          
        }}
      />
      <View
        style={{
          backgroundColor: "limegreen",
          width: 100,
          height: 100,
        }}
      />
    </View>
  );
}
