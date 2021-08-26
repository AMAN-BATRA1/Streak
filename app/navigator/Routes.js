import React, { Component, useEffect, useRef } from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../views/screens/auth/Login';
import Dashboard from '../views/screens/home/dashboard/Dashboard';


const Stack = createStackNavigator();

export default class Routes extends Component {

    render() {
        return (
            <NavigationContainer 
            >
                <Stack.Navigator
                    headerMode='none'
                    initialRouteName='Login'
                    mode='modal'
                    // screenOptions={{ transitionSpec : transitionConfig }}
                >
                    <Stack.Screen name={'MainRoutes'} component={MainRoutes} />
                   
                    

                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}


const MainRoutes = () => {
    return (
        <Stack.Navigator
            headerMode='none'
            initialRouteName='Dashboard'
            // screenOptions={{ transitionSpec : transitionConfig }}
        >
            {/* <Stack.Screen name={'Splash'} component={Splash} /> */}
            {/* <Stack.Screen name={'Login'} component={Login} /> */}


            <Stack.Screen name={'Dashboard'} component={Dashboard} />
           

        </Stack.Navigator>
    )
}



const transitionConfig = {
    open:{
        animation:'spring',
        config:{
            speed: 300
            // stiffness: 300,
            // mass: 1,
            // restDisplacementThreshold: 0.5,
            // restSpeedThreshold: 0.5,
        }
    },
    close:{
        animation:'spring',
        config:{
            speed: 300
            // stiffness: 300,
            // mass: 1,
            // restDisplacementThreshold: 0.5,
            // restSpeedThreshold: 0.5,
        }
    },
  }