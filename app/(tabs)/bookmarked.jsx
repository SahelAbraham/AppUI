import { ScrollView, View, Text, Image } from 'react-native'
import {React, useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import { TouchableOpacity } from 'react-native-web'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'

const Bookmarked = () => {
  
  return (
    <SafeAreaView className = "bg-primary h-full">
      <ScrollView>
      <View className="w-full justify-center h-full px-4 my-6">
        <View className="items-center">
          <Text className="text-xl text-white font-psemibold">Bookmarked Searches</Text>
          <Image source={images.placeholderpp} resizeMode= 'contain' className= 'w-[175px] h-[175px]'></Image>
          <Text className='text-2xl text-white font-psemibold'> USERNAME </Text>
        </View>       
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Bookmarked