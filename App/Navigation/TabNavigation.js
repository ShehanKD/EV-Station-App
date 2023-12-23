import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import FavScreen from '../Screens/FavScreen/FavScreen';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown:false,
        }} >

            <Tab.Screen name='Home'
                component={HomeScreen} options={{tabBarLabel:'Search',
                tabBarIcon:({color,size})=>(
                    <Ionicons name="search-sharp" size={size} color={color} />
                )}} />

            <Tab.Screen name='Favourite'
                component={FavScreen} />

            <Tab.Screen name='Profile'
                component={ProfileScreen} />


        </Tab.Navigator>
    )
}