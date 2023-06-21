import { View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#EEE",
        flex: 1,
        flexDirection: "row",
        // justifyContent: "space-around",
        alignItems: "center",
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
          alignSelf: "flex-start",
        }}
      />
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
        }}
      />
    </View>
  );
}
