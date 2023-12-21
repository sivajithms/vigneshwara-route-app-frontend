import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigator from './src/navigation';

export default function App() {
  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: 'white' }}>
      <PaperProvider >
        <Navigator/>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

