import { Text, View, StyleSheet, Button } from 'react-native'
import { useAuth0 } from 'react-native-auth0'
import axios from 'axios'

export default function Index() {
	const { authorize, getCredentials, clearSession, user } = useAuth0()
	const apiUrl = process.env.EXPO_PUBLIC_API_URL

	const signIn = async () => {
		try {
			await authorize()
		} catch (e) {
			console.log(e)
		}
	}

	const signOut = async () => {
		try {
			await clearSession()
		} catch (e) {
			console.log(e)
		}
	}

	const callApi = async () => {
		const credentials = await getCredentials()
		axios
			.get(apiUrl!, {
				headers: {
					Authorization: `Bearer ${credentials?.idToken}`,
				},
				timeout: 1000,
			})
			.then(res => {
				if (res.status !== 200) console.log(res)
				console.log(res.data)
			})
			.catch(err => console.log(err))
	}

	return (
		<View style={styles.container}>
			<Text>User: {user?.nickname}</Text>
			<Button onPress={signIn} title='Sign In' />
			<Button onPress={callApi} title='Call API' />
			<Button onPress={signOut} title='Sign Out' />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		gap: 20,
	},
	warn: {
		backgroundColor: 'red',
	},
})
