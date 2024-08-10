import { ScrollView, View, Text, Image } from 'react-native'
import {React} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'

const Welcome = () => {

  return (
    <SafeAreaView className = "bg-primary h-full">
      <ScrollView>
      <View className="w-full justify-center h-full px-4 my-6">
        <View className="items-center">
          <Text className="text-xl text-white font-psemibold">Welcome!</Text>
          <Image source={images.placeholderpp} resizeMode= 'contain' className= 'w-[175px] h-[175px]'></Image>
          <Text className='text-2xl text-white font-psemibold'> Your Account Has Been Created </Text>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Welcome