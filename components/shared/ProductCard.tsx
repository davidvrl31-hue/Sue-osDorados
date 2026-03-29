import { Text, Image, Pressable } from "react-native";

interface Props {
  id: string;
  name: string;
  price: number;
  image: any;
  onPress: () => void;
}

export default function ProductCard({
  name,
  price,
  image,
  onPress,
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      className="bg-white rounded-2xl p-3 m-2 flex-1 shadow"
    >
      <Image
        source={image}
        className="w-full h-32 rounded-xl"
        resizeMode="cover"
      />

      <Text className="text-gray-800 font-semibold mt-2">
        {name}
      </Text>

      <Text className="text-purple-600 font-bold mt-1">
        ${price}
      </Text>
    </Pressable>
  );
}