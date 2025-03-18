import { Button, StyleSheet, Text, View } from 'react-native'
import { useAuth0 } from 'react-native-auth0'
import axios from 'axios'

export default function Login() {
	const { authorize, getCredentials, user } = useAuth0()
	const apiUrl = process.env.EXPO_PUBLIC_API_URL

	const onPress = async () => {
		try {
			await authorize()
		} catch (e) {
			console.log(e)
		}
	}

	const callApi = async () => {
		const credentials = await getCredentials()
		const res = await axios.get(apiUrl!, {
			headers: {
				Authorization: `Bearer ${credentials?.idToken}`,
			},
		})
		console.log(res.data)
	}

	return (
		<View style={styles.container}>
			<Text>{user?.email}</Text>
			<Text>{user?.nickname}</Text>
			<View style={styles.button}>
				<Button onPress={onPress} title='Zaloguj' />
			</View>
			<View style={styles.button}>
				<Button onPress={callApi} title='Call API' />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		marginTop: 50,
	},
	button: {
		width: 200,
		marginTop: 50,
		borderRadius: 10,
	},
})
