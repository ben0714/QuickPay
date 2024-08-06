import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import Button from '../../../components/Buttons';

interface HeaderProps {
  title: string;
  handleQrCode: () => void;
}

const Header: React.FC<HeaderProps> = ({title, handleQrCode}) => {
  return (
    <View className="h-2/6 bg-white rounded-b-3xl p-4 flex-col justify-between">
      <View className="flex flex-row items-center gap-4">
        <Image
          className="bg-gray-200"
          source={require('../../../assets/qr.png')}
          style={{width: 30, height: 30}}
        />
        <View>
          <Text className="text-xl font-semibold">Wallet ID</Text>
          <Text className="text-gray-500">Welcome Back</Text>
        </View>
      </View>

      <View className="flex-col gap-3">
        <Text className="text-gray-600 text-lg">Total Balance</Text>
        <Text className="text-3xl font-semibold">$ 0.00</Text>
      </View>

      <Button
        text="Scan QR"
        onClick={handleQrCode}
        icon={require('../../../assets/qr.png')}
        iconSize={25}
      />
    </View>
  );
};

export default Header;
