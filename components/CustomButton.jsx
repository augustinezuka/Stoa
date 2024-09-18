import {  Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({
     title,handlePress,containerStyles,textStyles,isLoading
}) => {
  return (
    <TouchableOpacity 
    onPress={handlePress}
    activeOpacity={0.8}
    className={`bg-blue-600 rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${isLoading ? 'opacity-30':''}`}
    disabled={isLoading}>
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton