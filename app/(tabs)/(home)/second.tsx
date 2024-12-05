import { Pressable, View } from "react-native";
import { router } from "expo-router";
import { ThemedText } from "@/components/ThemedText";

export default function OnboardingScreen() {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<ThemedText style={{ fontSize: 24, fontWeight: 'bold' }}>Onboarding</ThemedText>
			<Pressable onPress={() => router.replace('/third')}>
				<ThemedText>Go to Third</ThemedText>
			</Pressable>
		</View>
	);
}
