import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, ActivityIndicator, Alert } from 'react-native'
import { React, useState, useEffect } from 'react'

import { useLocalSearchParams, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { icons } from '../../constants'
import { DATABASE, FIREBASE_AUTH } from '../(auth)/firebase';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc, query, where, setDoc } from 'firebase/firestore'
import { getAuth } from 'firebase/auth';


const Search = () => {
  const {query} = useLocalSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [response, setResponse] = useState('');
  const [press, setPress] = useState(true)
  const [saved, setSaved] = useState('#cdcde0')
  const auth = getAuth();
  const [id, setId] = useState()
  const user = auth.currentUser;
  const hardPrompt = 'You\'re an expert health care researcher who wants to obtain a summarized information about a disease and any progress that has been made. Don\'t make up any details or hallucinate information. Your response should be in two paragraphs or less'

  const fetchBookmarks = async () => {

  }
  const addBookmark = async () => {
    console.log('Started')
    if(user){
      console.log('Trying')
      await setDoc(doc(DATABASE, "User_Bookmarked", query ),{query: {query}, response: {response}, userId: user.uid})
      console.log('Success!')
    }
    else{
      Alert.alert('Error', 'No User Logged In')
      console.log('Failed!')
    }
  }
  const deleteBookmark = (id) => {
    console.log('Attempting Deletion')
    const document = doc(DATABASE, 'User_Bookmarked', id)
  }


    const fetchData = async () => {
       await fetch(`http://35.193.161.194:2000/services/pubmed_abstracts/`,{
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify({
          name: "string",
          description: 'string',
          prompt: hardPrompt,
          query: query,
            llm: 'string',
      })
      }).then(resp => resp.json())
      .then(data => { setResponse(JSON.stringify(data).replaceAll('\",\"success\":true', '')
      .replaceAll('\"results\":\"','') .replaceAll('\\n', '\n').slice(1,-1)) })
      .catch(err => { console.log(err) }); 
      setIsLoading(false)
    };

      useEffect(() => {
        fetchData();
      }, [])



      if(isLoading){
        return(
          <SafeAreaView className="flex-1 bg-primary justify-center items-center">
            <ActivityIndicator size='large' color='white'>
            </ActivityIndicator>
            <Text className="text-white mt-2">Loading Results...</Text>
          </SafeAreaView>
        )
      }

    const bookmarkQuery = async => {
    };
    
    const pressed = () => {
      setPress(!press)
      if (press){
        setSaved('#00CED1')
        Alert.alert('Confirmation', 'Save this search to bookmarks?', [
          { text: 'Cancel', onPress: () => {setSaved('#cdcde0'), setPress(true)}, },
          { text: 'OK', onPress: () => {console.log('OK Pressed'), addBookmark()} },
        ],)
      }
      else{
        setSaved('#cdcde0')
        Alert.alert('Confirmation', 'Delete this bookmarked search?', [
          { text: 'Cancel', onPress: () => {setSaved('#00CED1'), setPress(false)}, },
          { text: 'OK', onPress: () => {console.log('Ok2 Pressed')} },
        ],)
      }

    }

  return (
      <SafeAreaView className="bg-primary h-full">
        <ScrollView>
          <Text className="text-xl text-white font-psemibold mb-2 px-4 mt-6">Search Results</Text>
            <TouchableOpacity className="flex-row"onPress={() => {router.push('../search_tab')}}>
              <Image
                  source={icons.leftArrow}
                  className='w-5 h-5 ml-4 mr-2'
                  resizeMode='contain'
              />
              <Text className="text-white">Back to Search</Text>
            </TouchableOpacity>
            <View style={styles.container}>
              <View className="flex-row flex-wrap">
                <Text className= "text-xl text-black font-pbold mr-5" >{query}     
                <TouchableOpacity
                  onPress={pressed}
                >
                  <Image
                    source={icons.bookmark}
                    className="w-5 h-5 ml-2"
                    resizeMode='contain'
                    tintColor={saved}
                  />
                </TouchableOpacity>

                </Text>
                
              </View>
              <Text></Text>
              <Text className= "text-l text-white font-psemibold"> {response} </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
  )
}
export default Search

const styles = StyleSheet.create({
  container: {
    marginTop:20,
    backgroundColor: '#6c6c7a',
    padding: 15,
    margin: 10,
    borderWidth: 3,
    borderColor: '#878794',
    borderRadius:20
  },
});