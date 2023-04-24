import 'react-native-gesture-handler';

import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { StyleSheet } from 'react-native';
import DrawerNav from './src/routes/DrawerNav';

export default function App() {
  const [fontLoaded] = useFonts({
    'nunito-regular': require('./assets/fonts/NunitoSans-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/NunitoSans-Bold.ttf'),
  })

  if (!fontLoaded) {
    return (<AppLoading/>)
  }
  return (
      <DrawerNav/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
