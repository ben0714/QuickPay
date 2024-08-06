import React, {useState, useEffect} from 'react';
import {View, Alert, Platform, Text, SafeAreaView, Image} from 'react-native';
import {RNCamera, BarCodeReadEvent} from 'react-native-camera';
import {RootStackParamList} from '../../types';
import {RouteProp, useRoute} from '@react-navigation/native';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import Button from '../../components/Buttons';
import BarcodeMask from 'react-native-barcode-mask';

type QRCodeScannerScreenRouteProp = RouteProp<
  RootStackParamList,
  'QRCodeScanner'
>;

const QRCodeScanner: React.FC = () => {
  const route = useRoute<QRCodeScannerScreenRouteProp>();
  const {onSuccess} = route.params;

  const [hasCameraPermission, setHasCameraPermission] =
    useState<boolean>(false);

  console.log('🚀 ~ hasCameraPermission:', hasCameraPermission);

  useEffect(() => {
    const checkPermissions = async () => {
      let cameraStatus;
      if (Platform.OS === 'ios') {
        cameraStatus = await check(PERMISSIONS.IOS.CAMERA);
      } else {
        cameraStatus = await check(PERMISSIONS.ANDROID.CAMERA);
      }

      if (cameraStatus === RESULTS.GRANTED) {
        setHasCameraPermission(true);
      } else {
        let requestStatus;
        if (Platform.OS === 'ios') {
          requestStatus = await request(PERMISSIONS.IOS.CAMERA);
        } else {
          requestStatus = await request(PERMISSIONS.ANDROID.CAMERA);
        }

        if (requestStatus === RESULTS.GRANTED) {
          setHasCameraPermission(true);
        } else {
          Alert.alert(
            'Permission Denied',
            'Camera permission is required to scan QR codes.',
          );
        }
      }
    };

    checkPermissions();
  }, []);

  const handleBarCodeRead = (event: BarCodeReadEvent) => {
    onSuccess(event.data);
  };

  return (
    <View className="flex flex-1 justify-center items-center">
      <RNCamera
        className="w-full h-full flex-1"
        type={RNCamera.Constants.Type.back}
        captureAudio={false}
        onBarCodeRead={handleBarCodeRead}
      />
      <SafeAreaView className="absolute bg-gray-500 w-full h-full bg-primaryBlue flex-col justify-between items-center opacity-50">
        <View className="flex-row w-full items-center justify-center p-8">
          <Image
            className="absolute left-3"
            source={require('../../assets/arrow-left.png')}
            style={{width: 50, height: 50}}
          />
          <Text className="text-white text-base">Scan QR code</Text>
        </View>

        <View className="w-2/3 aspect-square bg-white opacity-100" />

        <View className="w-full p-4 z-50">
          <Button
            text="Confirm"
            disabled={true}
            onClick={() => console.log('asdasd')}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default QRCodeScanner;
