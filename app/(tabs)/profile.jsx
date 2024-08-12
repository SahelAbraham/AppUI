import { ScrollView, View, Text, Image, StyleSheet } from 'react-native'
import {React, useState, useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import { getAuth } from 'firebase/auth'


const Profile = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const [username, setUsername] = useState('')
  
  useEffect(() => {
    if(user.displayName === null){
      setUsername(user.email)
    }
    else{
      setUsername(user.displayName)
    }
  
    }, [])

  return (
    <SafeAreaView className = "bg-primary h-full">
      <ScrollView>
      <View className="w-full justify-center h-full px-4 my-6">
        <View className="items-center">
          <Text className="text-xl text-white font-psemibold mb-10">Profile</Text>
          {/* <Image source={images.placeholderpp} resizeMode= 'contain' className= 'w-[175px] h-[175px]'></Image> */}
          <Text className='text-2xl text-white font-pbold text-secondary'> {username} </Text>
          <View style={styles.container}>
            <Text className='text-xl text-secondary font-psemiibold'> Username: </Text>
          </View>
        </View>       
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: { 
    marginTop:20,
    flexDirection: 'row',
    alignItems:'flex-start',
    padding: 10,
    margin: 10,
    borderWidth: 2,
    borderColor: '#878794',
    borderRadius:10
  },
});