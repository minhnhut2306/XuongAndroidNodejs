import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, } from 'react-native';
import AppNavigation from './Components/AppNavigation';
import { AppProvider } from './Components/main/AppContext';

function App(): React.JSX.Element {
  return (
    <AppProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <AppNavigation />
      </SafeAreaView>
    </AppProvider>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});