import React from 'react';
import {View, Text, Button} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types';
import {useNavigation} from '@react-navigation/native';

// import {useQuery} from '@tanstack/react-query';
// import {UseFetch} from '../../react-query/hook';
import {Alert} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from './components/Header';
import Transactions from './components/Transactions';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  // const data = useQuery({
  //   queryKey: ['users'],
  //   queryFn: () => useFetch('users'),
  //   retry: 3, // Retry failed queries up to 3 times
  // });

  const handleQrCode = () => {
    navigation.navigate('QRCodeScanner', {
      onSuccess: (data: string) => {
        Alert.alert('QR Code Data', data);
        navigation.navigate('Home');
      },
    });
  };

  return (
    <>
      {/* <View className="bg-white"> */}
      <SafeAreaView className="bg-white">
        <View className="bg-primaryBlue w-full h-full">
          <Header title="Home" handleQrCode={handleQrCode} />
          <Transactions transactions={[]} />
        </View>
      </SafeAreaView>
      {/* </View> */}
    </>
  );
};

export default HomeScreen;
