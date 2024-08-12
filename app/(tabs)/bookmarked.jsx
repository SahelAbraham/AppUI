import { ScrollView, View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import {React, useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import { getAuth } from 'firebase/auth'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link, router } from 'expo-router'
import { DATABASE } from '../(auth)/firebase'
import { collection, getDocs, deleteDoc, doc, query, where, setDoc } from 'firebase/firestore'
import Empty from '../../components/Empty'


const Bookmarked = () => {

  const [bookmarked2, setBookmarked2] = useState([])
  let bookmarked = [];
   
  const auth = getAuth();
  const user = auth.currentUser;
  const fetchBookmarks = async () => {
    console.log('fetching')
    if(user){
      const q = query(collection(DATABASE, "User_Bookmarked"), where("userId", "==", user.uid));
      const bData = await getDocs(q).then()
      setBookmarked2(bData.docs.map((doc) => ({ ...doc.data(), id: doc.id})))
      // bData.forEach((doc) => {
      //   bookmarked.push(JSON.stringify(doc.data().query).replaceAll('\"', '').replaceAll('{', '').replaceAll('query', '').replaceAll('}','').replaceAll(':',''))
      // }) 
      console.log('fetched')
      // console.log('This is the bookmarks:', bookmarked)
    }
    else{
      console.log("No user logged in")
    }
  }

  user.displayName = 'GEMINI ADMIN'

  useEffect(() => {
    console.log('attempting fetch')
    fetchBookmarks()}
    , [])
  
  
  return (
    <SafeAreaView className = "bg-primary h-full">
      <FlatList
        data={bookmarked2}
        keyExtractor={(item) => item.$id}
        renderItem={({item}) => (
          <View className="border-2 border-black-200 w-full h-16 px-4 bg-black-300 rounded-2xl focus:border-secondary items-center flex-row space-x-4 my-4">
          <Text className="text-2xl text-white mx-2">
            {item.id} 
          </Text>
          <TouchableOpacity onPress={() => router.push(`../search/${item.id}`)}>
            <Text className="text-secondary text-med">
              Expand
            </Text>
            </TouchableOpacity>
        </View>
        )}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-pmediu2m text-sm text-gray-100">
                  {user.email}'s
                </Text>
                <Text className="text-2xl font-psemibold text-white">
                  Bookmarked Searches 
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
          </View>
        )}
        ListEmptyComponent={() => (
          <Empty
            title="No Bookmarks Yet"
            subtitle="Bookmarked searches will appear here"
          />
        )}
        ListFooterComponent={() => bookmarked2.length !== 0 && (
          <View className="mt-40">
            <Empty
              title="Keep Searching!"
              subtitle="Bookmarked searches will automatically appear!"
            />
          </View>
        )}
      />
    </SafeAreaView>
  )
}

export default Bookmarked

const styles = StyleSheet.create({
  container: {
    marginTop:20,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#5d5d63',
    padding: 10,
    margin: 10,
    borderWidth: 3,
    borderColor: '#878794',
    borderRadius:10,
    flexDirection:'row'
  },
});