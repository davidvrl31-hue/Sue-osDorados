import { Pressable, Text } from 'react-native';

export default function BotonCompra({ onPress }) {
  return (
    <Pressable
      onPress={onPress}
      className="bg-green-500 p-3 m-3 rounded-lg"
    >
      <Text className="text-white text-center font-bold">
        Comprar
      </Text>
    </Pressable>
  );
}

