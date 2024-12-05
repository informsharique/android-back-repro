import { View, Pressable } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { router } from "expo-router";

export default function HomeScreen() {
	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<ThemedText style={{ fontSize: 24, fontWeight: "bold" }}>Onboarding</ThemedText>
			<Pressable onPress={() => router.replace("/second")}>
				<ThemedText>Go to Second</ThemedText>
			</Pressable>
		</View>
	);
}
