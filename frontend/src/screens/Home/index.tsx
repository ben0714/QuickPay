import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types';
import {useNavigation} from '@react-navigation/native';

import {useQuery, useQueryClient} from '@tanstack/react-query';
import {customFetch} from '../../react-query/hook';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const {data, isLoading, isError, error, isFetching} = useQuery({
    queryKey: ['users'],
    queryFn: () => customFetch('users'),
    retry: 3, // Retry failed queries up to 3 times
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });

  console.log('🚀 ~ data:', data);
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
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

export default HomeScreen;
