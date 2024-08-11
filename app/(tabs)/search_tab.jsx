import { ScrollView, View, Text, Image, StyleSheet } from 'react-native'
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
          <View style={styles.container}>
            <Text className= "text-xl text-gray-300 font-psemibold mb-1">Ex. What is DMD: </Text>
            <Text className= "text-sm text-white font-psemibold mb-1">Duchenne muscular dystrophy, a genetic disorder characterized by progressive muscle weakness, is primarily diagnosed
              through a combination of clinical evaluation and genetic testing...
            </Text>
          </View>
          <View style={styles.container}>
            <Text className= "text-xl text-gray-300 font-psemibold mb-1">Ex. How rare is triple X syndrome? : </Text>
            <Text className= "text-sm text-white font-psemibold mb-1">Triple X syndrome is a genetic condition in which females have an extra X chromosome. 
              It is the most common sex chromosome aneuploidy, occurring in approximately 1 in 1,000 live female births...
            </Text>
          </View>
          <View style={styles.container}> 
            <Text className= "text-xl text-gray-300 font-psemibold mb-1">Ex. What is a rare disease? : </Text>
            <Text className= "text-sm text-white font-psemibold mb-1">Rare diseases, defined as those affecting less than 200,000 people in the United States, collectively impact an estimated 25-30 million Americans. 
              Despite their low individual prevalence, rare diseases encompass a vast spectrum, with over 7,000 distinct conditions recognized...
            </Text>
          </View>     
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop:20,
    backgroundColor: '#6c6c7a',
    padding: 15,
    margin: 5,
    borderWidth: 3,
    borderColor: '#878794',
    borderRadius:20
  },
});


export default Search