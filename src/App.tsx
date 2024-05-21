import React from 'react';
import SplashScreen from './Page/SplashScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingScreen from './Page/LandingScreen';
import TimerListScreen from './Page/TimerListScreen';
import TimerScreen from './Page/TimerScreen';
import StreakListScreen from './Page/StreakListScreen';
import StreakScreen from './Page/StreakScreen';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="TimerList" component={TimerListScreen} />
        <Stack.Screen name="Timer" component={TimerScreen} />
        <Stack.Screen name="StreakList" component={StreakListScreen} />
        <Stack.Screen name="Streak" component={StreakScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
