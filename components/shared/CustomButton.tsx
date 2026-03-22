import React from 'react';
import { Pressable, PressableProps, Text } from 'react-native';

interface Props extends PressableProps {
  titleBtn: string;
  color?: 'primary' | 'secundary' | 'tertiary' | 'quaternary';

  variants?: 'contained' | 'text-only' | 'icon-text' | 'icon-only';
  className?: string;
}

const CustomButton = ({titleBtn, color='primary', className, onPress, onLongPress, variants='contained'}: Props) => {

  const colorBtn = {
    primary: 'bg-blue-500',
    secundary: 'bg-secundary',
    tertiary: 'bg-tertiary',
    quaternary: 'bg-quaternary'
  }[color]

  const colorTxt = {
    primary: 'text-primary',
    secundary: 'text-secundary',
    tertiary: 'text-tertiary',
    quaternary: 'text-quaternary'
  }[color]

  if(variants === 'text-only'){
      return (
    
      <Pressable className={`p-3 active:opacity-90 ${className}`} onPress={onPress} onLongPress={onLongPress}>
        <Text className={`${colorTxt} text-center`}>{titleBtn}</Text>
      </Pressable>
    )
  } else if(variants === 'icon-text'){
    return (
    
      <Pressable className={`p-3 rounded-md ${colorBtn} active:opacity-90 ${className}`} onPress={onPress} onLongPress={onLongPress}>
        <Text className='text-white text-center'>{titleBtn}</Text>
      </Pressable>
    )
  }else if (variants === 'icon-only'){
    return (
    
      <Pressable className={`p-3 rounded-md ${colorBtn} active:opacity-90 ${className}`} onPress={onPress} onLongPress={onLongPress}>
        <Text className='text-white text-center'>{titleBtn}</Text>
      </Pressable>
    )
  }
  
  return (
    <Pressable className={`p-3 rounded-md ${colorBtn} active:opacity-90 ${className}`} onPress={onPress} onLongPress={onLongPress}>
      <Text className='text-white text-center'>{titleBtn}</Text>
    </Pressable>
  )
}

export default CustomButton