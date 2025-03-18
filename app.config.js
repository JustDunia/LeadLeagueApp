import 'dotenv/config'

export default ({ config }) => {
	return {
		...config,
		expo: {
			...config.expo,
			plugins: [
				...config.plugins,
				[
					'react-native-auth0',
					{
						domain: process.env.EXPO_PUBLIC_AUTH0_DOMAIN,
					},
				],
			],
			extra: {
				...config.extra,
				eas: {
					...config.extra.eas,
					projectId: process.env.EAS_PROJECT_ID,
				},
			},
		},
	}
}
