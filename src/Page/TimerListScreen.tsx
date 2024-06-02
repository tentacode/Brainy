import {NavigationProp, ParamListBase} from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';

interface TimerListScreenProps {
  navigation: NavigationProp<ParamListBase>;
}

function TimerListScreen({
  navigation,
}: TimerListScreenProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const timers = [
    {title: 'Tooth brushing', emoji: '🦷'},
    {title: 'Plank', emoji: '💪'},
    {title: 'Spaghetti', emoji: '🍝'},
    {title: 'Frozen beers', emoji: '🍺'},
    {
      title: 'One very long text that should span on multiple lines',
      emoji: '💀',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <FlatList
        data={timers}
        renderItem={({item}) => (
          <TouchableOpacity
            accessible={true}
            accessibilityLabel={item.title}
            accessibilityRole="button"
            style={styles.listItem}
            onPress={() => navigation.navigate('Timer')}>
            <>
              <Text style={styles.listItemEmoji}>{item.emoji}</Text>
              <Text style={styles.listItemTitle}>{item.title}</Text>
            </>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  listItem: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  listItemEmoji: {
    fontSize: 35,
    padding: 5,
  },
  listItemTitle: {
    flex: 1,
    fontSize: 24,
    marginLeft: 10,
  },
});

export default TimerListScreen;
