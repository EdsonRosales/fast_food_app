import { Slot } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function _Layout() {
  return (
    <SafeAreaView>
      <Text>Auth_layout</Text>
      <Slot />
    </SafeAreaView>
  );
}
