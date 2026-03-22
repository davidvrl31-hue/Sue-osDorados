import { Drawer } from 'expo-router/drawer';
import React from 'react';

const DrawerLayout = () => {
  return (
    <Drawer
        screenOptions={{
            overlayColor: 'rgba(0,0,0,0.4)',
            drawerActiveTintColor: 'indigo',
            sceneStyle: {
                backgroundColor: 'white'
            }
        }}
    >
        <Drawer.Screen
            name="login/index" 
            options={{
            drawerLabel: 'Login',
            title: 'Iniciar Sesion',
            }}
        />
      <Drawer.Screen
            name="register/index"
            options={{
            drawerLabel: 'Register',
            title: 'Registro de usuario',
            }}
        />
        <Drawer.Screen
            name="forgotPassword/index"
            options={{
            drawerLabel: 'Forgot Password',
            title: 'Olvido Contraseña',
            }}
        />
    </Drawer>
  )
}

export default DrawerLayout