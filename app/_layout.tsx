import { Stack } from 'expo-router'
import { Auth0Provider } from 'react-native-auth0'

export default function RootLayout() {
	return (
		<Auth0Provider
			domain={process.env.EXPO_PUBLIC_AUTH0_DOMAIN}
			clientId={process.env.EXPO_PUBLIC_AUTH_CLIENT_ID}
		>
			<Stack screenOptions={{ headerShown: false }}>
				<Stack.Screen name='(tabs)' options={{ title: 'sdf' }} />
			</Stack>
		</Auth0Provider>
	)
}
