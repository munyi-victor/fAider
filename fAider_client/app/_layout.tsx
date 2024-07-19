import { Stack } from "expo-router/stack";
import { Button } from "react-native";
import { useNavigation } from "expo-router";

type NavProps = {
  navigate(arg0: string): unknown;
}

export default function RootLayout() {
  const navigation:NavProps = useNavigation();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#3b5998",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Home",
          headerRight: () => (
            <Button
              title="Menu"
              onPress={() => {
                navigation.navigate('menu')
              }}
            />
          ),
        }}
      />
      <Stack.Screen name="menu" options={{ headerTitle: "Menu" }} />
      <Stack.Screen name="prompt" options={{ headerTitle: "Prompt" }} />
    </Stack>
  );
}
