import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../types';
import {useQuery, useQueryClient} from '@tanstack/react-query';

type DetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Details'
>;

const DetailsScreen: React.FC = () => {
  const navigation = useNavigation<DetailsScreenNavigationProp>();
  const queryClient = useQueryClient();

  const users = queryClient.getQueryData(['users']);

  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DetailsScreen;
