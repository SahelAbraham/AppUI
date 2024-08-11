import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { React, useState, useEffect } from 'react'

import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const Search = () => {
  const {query} = useLocalSearchParams();
  const [response, setResponse] = useState('');

    useEffect(() => {
      fetch(`http://35.193.161.194:2000/services/pubmed_abstracts/`,{
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify({
          name: "string",
          description: 'string',
          prompt: 'Give me a detailed, two paragraph summary from the viewpoint of a medical professional specializing in rare diseases based on the query given to you',
          query: query,
          llm: 'string',
      })
      }).then(resp => resp.json())
      .then(data => { console.log(JSON.stringify(data)) })
      .catch(err => { console.log(err) }); }, []);

  return (
    <ScrollView>
      <SafeAreaView className="bg-primary h-full">
        <View style={styles.container}>
          <Text className= "text-xl text-black font-pbold">{query}:</Text>
          <Text></Text>
          {/* <Text className= "text-l text-white font-psemibold"> {response} </Text> */}
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}
export default Search

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