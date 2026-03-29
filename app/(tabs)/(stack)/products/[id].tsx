import { View, Text, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";

const products = [
  {
    id: "1",
    name: "Cubrelecho Ovejero Gris",
    price: 185000,
    image:
      "https://dulcehogaronline.com.co/wp-content/uploads/2025/10/Imagen-de-WhatsApp-2025-05-09-a-las-11.38.20_0cdc3adf.jpg",
  },
  {
    id: "2",
    name: "Sábanas Algodón",
    price: 125000,
    image:
      "https://casalile.com/wp-content/uploads/1-BLANCO-ALGODON.jpg",
  },
  {
    id: "3",
    name: "Cortinas Modernas",
    price: 98000,
    image:
      "https://es.albertolamaphotography.com/uploads/img/fioletovie_shtori_v_interere_idei_i_sochetaniya_int5_15.jpg",
  },

  {
    id: "4",
    name: "Cortinas",
    price: 98000,
    image:
      "https://www.tia.com.ec/media/catalog/category/cortinas.jpg",
  },
];

export default function ProductDetail() {
  const { id } = useLocalSearchParams();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    const found = products.find((p) => p.id === id);
    setProduct(found);
  }, [id]);

  if (!product) return null;

  return (
    <View className="flex-1 bg-white p-4">
      <Image
        source={{ uri: product.image }}
        className="w-full h-64 rounded-xl"
      />

      <Text className="text-2xl font-bold mt-4">
        {product.name}
      </Text>

      <Text className="text-purple-600 text-xl mt-2">
        ${product.price}
      </Text>
    </View>
  );
}