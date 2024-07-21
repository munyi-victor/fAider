import { Stack } from "expo-router/stack";
import { Pressable, Text } from "react-native";
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
            <Pressable
              onPress={() => {
                navigation.navigate('menu')
              }}
            ><Text style={{color:'#fff', fontSize:18}}>Menu</Text></Pressable>
          )
        }}
      />
      <Stack.Screen name="menu" options={{ headerTitle: "Menu" }} />
      <Stack.Screen name="prompt" options={{ headerTitle: "Prompt" }} />
    </Stack>
  );
}
