import { View, Text, FlatList, Image, RefreshControl, StyleSheet } from 'react-native'
import {React, useEffect, useState} from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import {images} from '../../constants/'
import CustomButton from '../../components/CustomButton'
import Saved from '../../components/Saved'
import Empty from '../../components/Empty'
import { getAuth } from 'firebase/auth'
import { Link, Redirect, router } from 'expo-router'

const Home = () => {

  const [refreshing, setRefreshing] = useState(false)

  const auth = getAuth();
  const user = auth.currentUser;
  const [username, setUsername] = useState('')
  const [recents, setRecents] = useState([])

  useEffect(() => {
  if(user.displayName === null){
    setUsername(user.email)
  }
  else{
    setUsername(user.displayName)
  }

  }, [])

  const onRefresh = async () => {
    setRefreshing(true)
  }


  return (
    <SafeAreaView className="bg-primary h-full">
      
      <FlatList
        data={recents}
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
                  {username}
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

        ListFooterComponent={() => (
          <View className="justify-center items-center">
            <View style={styles.container}>
              <Text className="text-white text-xl font-pbold"> Our Mission </Text>
              <Text className= "text-black text-lg font-psemibold items-center"> Rare Diseases are defined as illnesses that affect less than
              <Text className= "text-secondary text-lg font-psemibold items-center"> 1 in 200,000 Americans</Text>
                . With over
                <Text className= "text-secondary text-lg font-psemibold items-center"> 7,000 diseases </Text>
                classified as rare,
                <Text className= "text-secondary text-lg font-psemibold items-center"> around 30 million Americans </Text>
                suffer from a rare disease, oftentimes with no real cure. We hope to change that.
              </Text>
            </View>
            <Text className="text-gray text-med font-psemibold">Powered by Google Gemini</Text>
          </View>
        )}

        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
      />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    textAlign:'center',
    textAlignVertical:'center',
    marginTop:20,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#6c6c7a',
    padding: 10,
    margin: 10,
    borderWidth: 3,
    borderColor: '#878794',
    borderRadius:20
  },
});