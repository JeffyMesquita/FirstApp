import { View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#EEE",
        flex: 1,
        flexDirection: "row",
      }}
    >
      <View
        style={{
          backgroundColor: "tomato",
          width: 200,
          height: 200,
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          width: 100,
          height: 300,
          // flexBasis: 150,
          // flex: 1,
          // flexGrow: 1,
          flexShrink: 1,
        }}
      />
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 300,
          flexGrow: 1,
          flexShrink: 1,
        }}
      />
      <View
        style={{
          backgroundColor: "limegreen",
          width: 100,
          height: 300,
        }}
      />
    </View>
  );
}
