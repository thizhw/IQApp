
import React, {useState, useEffect} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import Dashboard from "./screens/Dashboard";
import GetStarted from "./screens/GetStarted";

const Stack = createNativeStackNavigator ();

export function MainRoute() {
    return (
        <NavigationContainer>
            <Stack.Navigator 
            screenOptions={{
                headerShown: false,
                presentation: 'modal',
                animationTypeForReplace: 'push'
            }}>
                {/* <Stack.Screen name="GetStarted" component={GetStarted} /> */}
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Dashboard" component={Dashboard} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}