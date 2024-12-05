import { router } from "expo-router";
import { Pressable, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";

export default function SignInScreen() {
	const signIn = () => {
		router.replace("/(tabs)/(home)/main");
	};

	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<ThemedText style={{ fontSize: 24, fontWeight: 'bold' }}>SignIn</ThemedText>
			<Pressable onPress={signIn}>
				<ThemedText>SignIn</ThemedText>
			</Pressable>
		</View>
	);
}
