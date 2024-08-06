import React from 'react';
import {
  TouchableOpacity,
  Text,
  Image,
  ImageSourcePropType,
  View,
} from 'react-native';

interface ButtonProps {
  text: string;
  icon?: ImageSourcePropType;
  onClick: () => void;
  color?: string;
  iconSize?: number;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  icon,
  onClick,
  color = 'bg-lightBlue',
  iconSize = 20,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onClick}
      className={
        color + ' flex flex-row rounded-xl p-3 justify-center items-center'
      }>
      <View className="flex flex-row  items-center gap-2">
        {icon && (
          <Image source={icon} style={{width: iconSize, height: iconSize}} />
        )}
        <Text className="text-white font-semibold text-base">{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
