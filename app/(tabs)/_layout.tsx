import { FontAwesome } from '@expo/vector-icons'
import { Tabs } from 'expo-router'

export default function TabsLayout() {
	return (
		<Tabs
			screenOptions={{
				headerTitleAlign: 'center',
			}}
		>
			<Tabs.Screen
				name='index'
				options={{
					title: 'Home',
					tabBarIcon: ({ color, size }) => <FontAwesome name='home' size={size} color={color} />,
				}}
			/>
		</Tabs>
	)
}
