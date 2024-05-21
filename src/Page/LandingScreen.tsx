import {NavigationProp, ParamListBase} from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

interface LandingScreenProps {
  navigation: NavigationProp<ParamListBase>;
}

function LandingScreen({navigation}: LandingScreenProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.allCenter}>
        <Text
          style={styles.textLogo}
          onPress={() => navigation.navigate('Splash')}>
          Landing
        </Text>
        <Text onPress={() => navigation.navigate('TimerList')}>⏲️ Timers</Text>
        <Text onPress={() => navigation.navigate('StreakList')}>
          🔥 Streaks
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  allCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLogo: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default LandingScreen;
