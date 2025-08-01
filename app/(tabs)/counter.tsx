import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => {
      if (prevCount > 0) {
        return prevCount - 1;
      }
      return prevCount;
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{count}</Text>
      <View style={styles.btns}>
        <TouchableOpacity onPress={decrement}>
          {count > 0 && (
            <MaterialIcons name="remove-circle" size={80} color="red" />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={increment}>
          <MaterialIcons name="add-circle" size={80} color="green" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    justifyContent: "center",
    // alignItems: "center",
  },
  text: {
    fontSize: 150,
    alignSelf: "center",
  },
  btns: {
    flexDirection: "row",
    gap: 50,
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
});
