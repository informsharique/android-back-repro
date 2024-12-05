import { Stack } from "expo-router";
import "react-native-reanimated";


export default function RootLayout() {
	return (
		<Stack>
			<Stack.Screen name="main" />
			<Stack.Screen name="second" />
			<Stack.Screen name="third" />
		</Stack>
	);
}
