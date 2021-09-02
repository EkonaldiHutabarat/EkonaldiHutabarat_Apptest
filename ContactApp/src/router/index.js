import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import { Contact, Splash } from '../pages';
const Stack = createStackNavigator();

const Router = () =>{
    return(
        <Stack.Navigator>
            
            <Stack.Screen 
                // initialRouteName="Splash"
                name="Splash"
                component={Splash}
                options={{headerShown:false}}
            />
            <Stack.Screen 
                name="Contact"
                component={Contact}
                options={{headerShown:false}}
            />
        </Stack.Navigator>
    )
}

export default Router