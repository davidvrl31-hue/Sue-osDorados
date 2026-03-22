import { Stack } from 'expo-router'
import React from 'react'

const StackLayout = () => {
  return (
    <Stack
        screenOptions={{
            contentStyle: {
                backgroundColor: 'white'
            }
        }}
    >
        <Stack.Screen 
            name="home/index" 
            options={{
                title: 'Sueños Dorados'
            }} 
        />
        <Stack.Screen 
            name="products/index" 
            options={{
                title: 'Productos'
            }} 
        />
    </Stack>
  )
}

export default StackLayout