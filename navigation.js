import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import React from 'react'
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import EmployeeScreen from './screens/EmployeeScreen';
import ProjectScreen from './screens/ProjectScreen';
import EmployeeInfoScreen from './screens/EmployeeInfoScreen';
import ProjectInfoScreen from './screens/ProjectInfoScreen'

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
                }}>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Employees" component={EmployeeScreen} />
                <Stack.Screen name="EmployeeInfo" component={EmployeeInfoScreen} />
                <Stack.Screen name="ProjectInfo" component={ProjectInfoScreen} />
                <Stack.Screen name="Projects" component={ProjectScreen} />
                {/* <Stack.Screen name="Cart" options={{presentation : 'modal'}} component={CartScreen} />
                <Stack.Screen name="OrderPreparing" options={{presentation : 'fullScreenModal'}} component={OrderPreparing} />
                <Stack.Screen name="Delivery" options={{presentation : 'fullScreenModal'}} component={DeliveryScreen} />
                <Stack.Screen name="Comment" options={{presentation : 'fullScreenModal'}} component={CommentScreen} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
} 