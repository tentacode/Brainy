import {NavigationProp, ParamListBase} from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

interface LandingScreenProps {
  navigation: NavigationProp<ParamListBase>;
}

function LandingScreen({navigation}: LandingScreenProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const menuItems = [
    {title: 'Timers', icon: '⏲️', screen: 'TimerList'},
    {title: 'Streaks', icon: '🔥', screen: 'StreakList'},
    {title: 'Kitchen', icon: '👩‍🍳', screen: 'StreakList'},
    {title: 'Todos', icon: '✅', screen: 'StreakList'},
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.container}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            accessible={true}
            accessibilityLabel={item.title}
            accessibilityRole="button"
            key={index}
            onPress={() => navigation.navigate(item.screen)}
            style={styles.menuItemWrapper}>
            <View style={styles.iconWrapper}>
              <Text style={styles.icon}>{item.icon}</Text>
            </View>
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  menuItemWrapper: {
    alignItems: 'center',
    width: '33.3333%',
    padding: 13,
  },
  iconWrapper: {
    width: '100%',
    aspectRatio: 1,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  icon: {
    fontSize: 45,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LandingScreen;
