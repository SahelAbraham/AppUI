import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import {images} from '../../constants/'
import Latest from "../../components/Latest"

const Home = () => {
  return (
    <SafeAreaView className="bg-primary">
      <FlatList
        data={[{id:1},{id:2},{id:3}]}
        keyExtractor={(item) => item.$id}
        renderItem={({item}) => (<Text className="text-3xl text-white">{item.id}</Text>)}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-pmedium text-sm text-gray-100">
                  Welcome Back!
                </Text>
                <Text className="text-2xl font-psemibold text-white">
                  USERNAME
                </Text>
              </View>
              <View className="mt-1.5">
                <Image
                  source={images.gemlogoSmall}
                  className="w-10 h-11"
                  resizeMode='contain'
                />
              </View>
            </View>

            <View className='w-full flex-1 pt-5 pb-8'>
              <Text className="text-gray-100 text-lg font-pregular mb-3">
                Latest Research
              </Text>

              <Latest posts={[{id:1},{id:2},{id:3}] ?? []}/>
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <Text className ="text-white">Empty</Text>
        )}
      />
    </SafeAreaView>
  )
}

export default Home