import {
  View,
  StyleSheet,
  Text,
  Alert,
  Platform,
  ScrollView,
  FlatList,
  ListRenderItemInfo,
} from "react-native";
import { Button } from "./components/Button";
import { TextInput } from "./components/TextInput";
import { List } from "./components/List";
import { login } from "./service/authService";
import { Coffee, coffeeList } from "./CoffeeList/data/coffeeList";
import { CoffeeItem } from "./CoffeeList/CoffeeItem";

export default function App() {
  const changeName = (text: string) => {
    console.log(text);
  };

  async function onPressButton() {
    try {
      const token = await login("je_2742@hotmail.com", "123456");
      Alert.alert("Sucesso", `Token: ${token}`);
    } catch (error) {
      console.log(error);
    }
  }

  function renderItem({ item }: ListRenderItemInfo<Coffee>) {
    return <CoffeeItem {...item} />;
  }

  return (
    <View style={styles.container}>
      {/* <ScrollView
        onScroll={({ nativeEvent }) => console.log(nativeEvent.contentOffset.y)}
        scrollEventThrottle={2000}
      >
        {coffeeList.map((coffee, index) => (
          <CoffeeItem key={index} {...coffee} />
        ))}
      </ScrollView> */}
      <FlatList
        data={coffeeList}
        keyExtractor={(coffee) => coffee.name}
        // renderItem={({ item, index }) => <CoffeeItem {...item} />}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
