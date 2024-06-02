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
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false, title: ''}}
        />
        <Stack.Screen
          name="Landing"
          component={LandingScreen}
          options={{title: 'Brainy'}}
        />
        <Stack.Screen
          name="TimerList"
          component={TimerListScreen}
          options={{title: '⏲️ Timers'}}
        />
        <Stack.Screen name="Timer" component={TimerScreen} />
        <Stack.Screen
          name="StreakList"
          component={StreakListScreen}
          options={{title: '🔥 Streaks'}}
        />
        <Stack.Screen name="Streak" component={StreakScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
