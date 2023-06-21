import { View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#EEE",
        flex: 1,
        flexDirection: "column",
      }}
    >
      <View
        style={{
          backgroundColor: "tomato",
          flex: 2,
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          flex: 1,
        }}
      />
      <View
        style={{
          backgroundColor: "dodgerblue",
          flex: 3,
        }}
      />
    </View>
  );
}
