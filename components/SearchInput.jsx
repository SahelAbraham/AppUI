import { View, TextInput, TouchableOpacity, Image, Alert } from 'react-native'
import { React, useState } from 'react'
import { icons } from '../constants'
import { usePathname, router } from 'expo-router'

const SearchInput = ({title, value, placeholder, handleChangeText, otherStyles, ...props}) => {

    const pathname = usePathname();
    const [query, setQuery] = useState('')

  return (
      <View className="border-2 border-black-200 w-full h-16 px-4 bg-black-300 rounded-2xl focus:border-secondary items-center flex-row space-x-4">
        <TextInput className="text-base mt-0.5 text-white flex-1 font-pregular"
            value={query}
            placeholder="Give me information about..."
            placeholderTextColor="#7b7b8b"
            onChangeText={(e) => setQuery(e)}
        />
        <TouchableOpacity onPress={() => {
            if(!query) {
                return Alert.alert('Missing query', "Please input a valid search")
            }
            
            if(pathname.startsWith('../search')){
                router.setParams({query})
            }
            else{
                router.push(`../search/${query}`)
            }
        }}>
            <Image
                source={icons.search}
                className='w-5 h-5'
                resizeMode='contain'
            />
        </TouchableOpacity>
      </View>
  )
}

export default SearchInput