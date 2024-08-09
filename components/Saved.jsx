import { View, Text } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'

const Saved = ({posts}) => {
  return (
    <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({item}) => (<Text className="text-3xl text-white">{item.id}</Text>)}
        horizontal
    />
  )
}

export default Saved