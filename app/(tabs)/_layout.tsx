import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'

const TabsLayout = () => {
  return (
    <Tabs
        screenOptions={{
            tabBarActiveTintColor: 'orange'
        }}
    >
        <Tabs.Screen
        name="cart/index"
        options={{
          title: 'Carrito de compras',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="cart" color={color} />,
        }}
      />
      <Tabs.Screen
        name="favorite/index"
        options={{
          title: 'Favoritos',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="heart" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="person" color={color} />,
        }}
      />
      <Tabs.Screen
        name="(drawer)"
        options={{
          title: 'Drawer',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="menu" color={color} />,
        }}
      />
      <Tabs.Screen
        name="(stack)"
        options={{
          title: 'stack',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="send" color={color} />,
        }}
      />
    </Tabs>
  )
}

export default TabsLayout