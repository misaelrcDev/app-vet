import { Tabs } from "expo-router";
import { Platform } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';

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
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
         }}
      />
      <Tabs.Screen 
        name="tasks"
        options={{ 
          title: 'Tasks',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="check" color={color} />,
         }}
      />
      <Tabs.Screen 
        name="counter"
        options={{ 
          title: 'Counter',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="hourglass" color={color} />,
         }}
      />
    </Tabs>
  );
}
