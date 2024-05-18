import React, { useEffect } from 'react';
import {
  AccessibilityInfo,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

function SplashScreen(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.container}
      accessible={true}
      accessibilityHint="Brainy is loading"
      accessibilityLanguage="en"
      accessibilityViewIsModal={true}
    >
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <View style={styles.allCenter}>
        <Image
          source={require('../../assets/img/brainy.png')}
          style={styles.imageLogo}
        />
        <Text style={styles.textLogo}>
          Brainy
        </Text>
        <Text style={styles.subText}>
          your second brain
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'pink',
        flex: 1,
    },
    allCenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageLogo: {
        width: 250,
        height: 250,
    },
    textLogo: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'black',
    },
    subText: {
        fontSize: 20,
        color: 'slategray',
    }
});

export default SplashScreen;
