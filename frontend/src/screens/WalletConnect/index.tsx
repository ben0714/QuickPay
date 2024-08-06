import React, {useEffect, useState, useMemo} from 'react';
// import {AlchemySigner} from '@alchemy/aa-alchemy';
// import {useAuthenticate} from '@alchemy/aa-alchemy/react';

import {
  View,
  Button,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

const settings = {
  apiKey: 'bWA9YNB_ulJ9MRY2XScVWx-8JlIlO2Af',
  network: 'eth-sepolia',
};

const WalletConnectScreen: React.FC = () => {
  const [email, setEmail] = useState('');

  // const {authenticate} = useAuthenticate();

  return (
    <SafeAreaView>
      <Text>hello world</Text>
    </SafeAreaView>
  );
};

export default WalletConnectScreen;
