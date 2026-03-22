import CustomButton from '@/components/shared/CustomButton'
import { router } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const HomeScreen = () => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <CustomButton titleBtn='Ver Productos' onPress={() => router.push('/products')} />
    </View>
  )
}

export default HomeScreen