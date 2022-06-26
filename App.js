import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import Header from './src/components/Header';
import Splash from './src/components/Splash';
import database from '@react-native-firebase/database';


const Stack = createNativeStackNavigator();

export default function App() {
  const [data, setData] = useState(0);

  setInterval(
    () => {
      database()
        .ref(`/sensor/temp`)
        .on('value', snapshot => {
          setData(snapshot.val());
        });
    }, 3000
  )

  if (data > 0) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerTitle: (props) => <Header {...props} />,
              headerStyle: {
                backgroundColor: '#94DAFF88',
              }
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
  else {
    return (<Splash />)
  }
}