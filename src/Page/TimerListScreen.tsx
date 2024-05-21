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

interface TimerListScreenProps {
  navigation: NavigationProp<ParamListBase>;
}

function TimerListScreen({
  navigation,
}: TimerListScreenProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.allCenter}>
        <Text style={styles.textTitle}>Timer list</Text>
        <Text onPress={() => navigation.navigate('Timer')}>Timer 1</Text>
        <Text onPress={() => navigation.navigate('Timer')}>Timer 2</Text>
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
  textTitle: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default TimerListScreen;
