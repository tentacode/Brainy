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

interface StreakListScreenProps {
  navigation: NavigationProp<ParamListBase>;
}

function StreakListScreen({
  navigation,
}: StreakListScreenProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.allCenter}>
        <Text onPress={() => navigation.navigate('Streak')}>Streak 1</Text>
        <Text onPress={() => navigation.navigate('Streak')}>Streak 2</Text>
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
});

export default StreakListScreen;
