import React, {useState, useEffect} from 'react';
import {View, Text, Alert, Platform} from 'react-native';
import {RNCamera, BarCodeReadEvent} from 'react-native-camera';
import {RootStackParamList} from '../../types';
import {RouteProp, useRoute} from '@react-navigation/native';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type QRCodeScannerScreenRouteProp = RouteProp<
  RootStackParamList,
  'QRCodeScanner'
>;

const QRCodeScanner: React.FC = () => {
  const route = useRoute<QRCodeScannerScreenRouteProp>();
  const {onSuccess} = route.params;

  const [hasCameraPermission, setHasCameraPermission] =
    useState<boolean>(false);

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

  if (!hasCameraPermission) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>No access to camera</Text>
      </View>
    );
  }

  return (
    <View className="flex flex-1 justify-center items-center">
      <RNCamera
        className="w-full h-full flex-1"
        type={RNCamera.Constants.Type.back}
        captureAudio={false}
        onBarCodeRead={handleBarCodeRead}
      />
      <View className="absolute h-full w-full bg-black opacity-70 justify-center items-center">
        <View className="w-40 h-40 border-2 border-white bg-opacity-0" />
      </View>
    </View>
  );
};

export default QRCodeScanner;
