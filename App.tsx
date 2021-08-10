import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from "react-redux";

import MainStackNavigator from './src/navigators/MainStackNavigator';
import { updateDataBaseStructure } from './src/database/updateDB';
import { store } from './src/redux/store/store';

const AppState = ({ children }: any) => {
    return (
        <>
            <Provider store={store}>
                {/* App children */}
                {children}
            </Provider>
        </>
    );
};

const App = () => {
    const [isLoading, setIsLoading] = useState(true)
    const initApp = async() => {
        await updateDataBaseStructure()
        setIsLoading(false)
    }
    useEffect(() => {
        initApp()
    }, []);

    return (
        <NavigationContainer>
            <AppState>
                { !isLoading && <MainStackNavigator />}
            </AppState>
        </NavigationContainer>
    );
};

export default App;
