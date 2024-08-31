import { Stack, Slot } from "expo-router";
import "../global.css"

function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}

module.exports = {
  Slot,
  RootLayout
} 