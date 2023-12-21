import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { IconButton } from 'react-native-paper';
import AddPlace from '../screens/AddPlace';
import EditPlace from '../screens/AddPlace/EditPlace';
import AddStore from '../screens/AddStore';
import EditStore from '../screens/AddStore/EditStore';
import Home from '../screens/Home';
import Welcome from '../screens/SignIn';
import LoginScreen from '../screens/SignIn/LoginScreen';
import RegisterScreen from '../screens/SignIn/RegisterScreen';
import Stores from '../screens/Stores';

const Navigator = () => {

    const handleLogout = (navigation) => {
        navigation.navigate("Welcome");
    }

    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Welcome' >
                <Stack.Screen name="Welcome" options={{ title: 'Welcome', headerLeft: null, headerBackVisible: false, }} component={Welcome} />
                <Stack.Screen name="Home" options={({ navigation }) => ({
                    title: 'Stebin',
                    headerRight: () => (
                        <IconButton
                            icon="logout"
                            onPress={() => handleLogout(navigation)}
                            color="#000"
                        />
                    ),
                })} component={Home} />
                <Stack.Screen name="AddPlace" options={{ title: 'Add Place' }} component={AddPlace} />
                <Stack.Screen name="EditPlace" options={{ title: 'Edit Place' }} component={EditPlace} />
                <Stack.Screen name="stores" component={Stores} options={({ route }) => ({
                    title: route.params ? route.params.headerTitle : 'Stores',
                    headerTitleAlign: 'center',
                    headerTintColor: 'white',
                    headerStyle: {
                        backgroundColor: '#3498db'
                    },
                })} />
                <Stack.Screen name="AddStore" options={{ title: 'Add Store' }} component={AddStore} />
                <Stack.Screen name="EditStore" options={{ title: 'Add Store' }} component={EditStore} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};



export default Navigator;
