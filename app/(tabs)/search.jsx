import { ScrollView, View, Text, Image } from 'react-native'
import {React, useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import { TouchableOpacity } from 'react-native-web'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'
import SearchInput from '../../components/SearchInput'

const Search = () => {

  return (
    <SafeAreaView className = "bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center h-full px-4 my-6">
          <Text className="text-xl text-white font-psemibold mb-3">Search</Text>
          <SearchInput/>      
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Search