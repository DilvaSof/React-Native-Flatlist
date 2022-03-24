import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import HomeScreen from '../src/screens/HomeScreen'
import { AppStack } from '../src/types'
import Detail from '../src/screens/Detail'

const Stack = createNativeStackNavigator<AppStack>()

const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Home'
                    component={HomeScreen}


                />
                <Stack.Screen
                    name='Detail'
                    component={Detail}


                />


            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack