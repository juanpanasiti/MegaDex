import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import PokedexScreen from '../screens/PokedexScreen';
import TestScreen from '../screens/TestScreen';

const Drawer = createDrawerNavigator();

const MainDrawerNavigator = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Drawer.Screen name="HomeScreen" component={HomeScreen} />
            <Drawer.Screen name="PokedexScreen" component={PokedexScreen} />
            <Drawer.Screen name="TestScreen" component={TestScreen} />
        </Drawer.Navigator>
    );
};

export default MainDrawerNavigator;
