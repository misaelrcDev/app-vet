import { Tabs } from "expo-router";
import { Platform } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: Platform.select({
          default: {},
        }),
      }}>
      <Tabs.Screen 
        name="index"
        options={{ 
          title: 'Home'
         }}
      />
    </Tabs>
  );
}
