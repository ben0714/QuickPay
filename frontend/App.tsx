import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home';
import DetailsScreen from './src/screens/Details';
import QRCodeScanner from './src/screens/QR-Scanner';
import {RootStackParamList} from './src/types';
import {config} from './src/config';
import WalletConnectScreen from './src/screens/WalletConnect';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {AlchemyAccountProvider} from '@alchemy/aa-alchemy/react-native';

import 'node-libs-react-native/globals.js';
import 'react-native-get-random-values';
import 'node-libs-react-native/globals.js';
import 'react-native-get-random-values';

const Stack = createNativeStackNavigator<RootStackParamList>();

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Wallet"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Wallet" component={WalletConnectScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="QRCodeScanner" component={QRCodeScanner} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
