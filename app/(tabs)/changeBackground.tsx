import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ChangeBackground() {
  const [background, setBackground] = useState("");

  const colors = [
    "#FFC0CB", // Rosa
    "#ADD8E6", // Azul Claro
    "#90EE90", // Verde Claro
    "#FFD700", // Dourado
    "#FFA07A", // Salmão Claro
    "#DDA0DD", // Ameixa
    "#AFEEEE", // Turquesa Claro
    "#FF6347", // Tomate
    "#F0E68C", // Caqui
    "#DA70D6", // Orquídea
  ];

  const generateBackgroundColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  const changeBackgroundColor = () => {
    const newColor = generateBackgroundColor();
    // console.log(newColor);
    setBackground(newColor);
  }

  return (
    <View style={[styles.container, {backgroundColor: background}]}>
      <Text style={styles.text}>Cor Atual: {background}</Text>
      <TouchableOpacity onPress={changeBackgroundColor}>
        <MaterialIcons name="change-circle" size={68} color="blue" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 25,
  },
});
