import { View, Text, FlatList, Image, RefreshControl } from 'react-native'
import {React, useState} from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import {images} from '../../constants/'
import CustomButton from '../../components/CustomButton'
import Saved from '../../components/Saved'
import Empty from '../../components/Empty'
import { Link, Redirect, router } from 'expo-router'

const Home = () => {

  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = async () => {
    setRefreshing(true)
  }


  return (
    <SafeAreaView className="bg-primary h-full">
      
      <FlatList
        // data={[{id:1}, {id:2}, {id:3}]}
        // data={[]}
        keyExtractor={(item) => item.$id}
        renderItem={({item}) => (<Text className="text-3xl text-white">{item.id}</Text>)}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-pmediu2m text-sm text-gray-100">
                  Welcome Back
                </Text>
                <Text className="text-2xl font-psemibold text-white">
                  GEMINI
                </Text>
              </View>
              <View className="mt-1.5">
                <Image
                  source={images.ardent}
                  className="w-10 h-11"
                  resizeMode='contain'
                />
              </View>
            </View>            
            <View className='w-full flex-1 pt-5 pb-8'>
              <Text className="text-gray-100 text-lg font-pregular mb-3">
                Recent Queries
              </Text>
              <Saved posts={[]}/>
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <Empty
            title="No Searches Found"
            subtitle="Start searching, recent queries will appear here"
          />
        )}

        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
      />
    </SafeAreaView>
  )
}

export default Home