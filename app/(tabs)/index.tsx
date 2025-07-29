import AppCard from "@/components/AppCard";
import { MaterialIcons } from "@expo/vector-icons";
import { LinkProps } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {

  type AppItem = {
    name: string;
    route: LinkProps["href"];
    iconName: keyof typeof MaterialIcons.glyphMap;
  };

  const apps: AppItem[] = [
    {
      name: "Task Manager",
      route: "/tasks",
      iconName: "check-circle",
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>AppVet</Text>
      <View style={styles.grid}>
        {apps.map((app) => (
          <AppCard
            key={app.name}
            name={app.name}
            iconName={app.iconName}
            href={app.route}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  title: {
    paddingTop: 50,
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 24,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});
