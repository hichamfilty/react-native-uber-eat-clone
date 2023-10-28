import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Roots from './src/navigation/Roots';
import { colors } from './src/global/Styles';
import { SignInContextProvider } from './src/contexts/authContext';

export default function App() {
  return (
    <SignInContextProvider>
      <View style={styles.container}>
        <StatusBar
          barStyle='light-content'
          backgroundColor={colors.statusbar}
        />
        <Roots />
      </View>
    </SignInContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
