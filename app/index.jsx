import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, View } from 'react-native';
import { Link, Redirect, router } from 'expo-router';
import {SafeAreaView} from 'react-native-safe-area-context';
import {images} from '../constants'; 
import CustomButton from '../components/CustomButton';

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%'}}>
        <View className="w-full flex items-center min-h-[85vh] px-4">
          <Image
            source={images.gemlogo}
            className="w-[700px] h-[200px]"
            resizeMode="scale"
          />

          <CustomButton
            title="Sign In"
            handlePress={() => router.push('/signin')}
            containerStyles="w-full mt-7"
          />

        </View>
      </ScrollView>
      <StatusBar backgroundColor='#10142E' style='light'/>
    </SafeAreaView>

  );
}

