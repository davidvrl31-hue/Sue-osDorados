import React from 'react'
import { Text, View } from 'react-native'
import BotonCompra from '../../../components/BotonCompra'

const CartScreen = () => {
  return (
    <View>
      <Text>CartScreen</Text>
      <BotonCompra onPress={() => alert('Compra realizada')} />
    </View>
  )
}

export default CartScreen