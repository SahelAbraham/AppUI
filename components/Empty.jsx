import { View, Text, Image } from 'react-native'
import {router} from 'expo-router'
import React from 'react'
import { images } from '../constants'
import CustomButton from './CustomButton'

const Empty = ( {title, subtitle }) => {
  return (
    <View className='justify-center items-center px-4'>
        <Image source={images.empty2} className="w-[100px] h-[150px]" resizeMode='contain'/>

        <Text className="text-xl font-psemibold text-white mt-2"> {title} </Text>
        <Text className="font-pmedium text-sm text-gray-100"> {subtitle} </Text>
        <CustomButton
            title="New Search"
            handlePress={() => router.push('/search')}
            containerStyles="w-full my-5"
        />
    </View>
  )
}

export default Empty