import React from 'react';

import {ScrollView, Text, View, TouchableOpacity, Image} from 'react-native';

interface Transaction {
  id: number;
  amount: number;
  description: string;
}

interface TransactionsProps {
  transactions: Transaction[];
}

const Transactions: React.FC<TransactionsProps> = ({transactions}) => {
  return (
    <View className="bg-primaryBlue w-full h-full p-4">
      <View className="flex-row justify-between items-center">
        <Text className="text-white font-medium text-lg">Transactions</Text>
        <TouchableOpacity className="flex-row items-center gap-1 opacity-25">
          <Text className="text-white text-base">See detail</Text>
          <Image
            source={require('../../../assets/arrow-right.png')}
            style={{width: 25, height: 25}}
          />
        </TouchableOpacity>
      </View>
      <ScrollView className="bg-primaryBlue h-full w-full">
        {/* <ul>
        {transactions.map((transaction: Transaction) => (
            <li key={transaction.id}>
            <span>{transaction.amount}</span>
            <span>{transaction.description}</span>
            </li>
            ))}
            </ul> */}
      </ScrollView>
    </View>
  );
};

export default Transactions;
