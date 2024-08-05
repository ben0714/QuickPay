import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types';
import {useNavigation} from '@react-navigation/native';

import {useQuery} from '@tanstack/react-query';
import {useFetch} from '../../react-query/hook';
import {Alert} from 'react-native';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const data = useQuery({
    queryKey: ['users'],
    queryFn: () => useFetch('users'),
    retry: 3, // Retry failed queries up to 3 times
  });

  const handleQrCode = () => {
    navigation.navigate('QRCodeScanner', {
      onSuccess: (data: string) => {
        Alert.alert('QR Code Data', data);
        navigation.navigate('Home');
      },
    });
  };

  return (
    <View className="">
      <Text>Home Screen</Text>
      <Button title="scan qr code" onPress={handleQrCode} />
    </View>
  );
};

export default HomeScreen;
