import CustomButton from '@/components/shared/CustomButton'
import { router } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const ProductsScreen = () => {
  return (
    <View>
      <Text>ProductsScreen</Text>
      <CustomButton titleBtn='Ir al Inicio' onPress={() => router.push('/products')} />

    </View>
  )
}

export default ProductsScreen