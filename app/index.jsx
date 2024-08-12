import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, View, LogBox } from 'react-native';
import { Link, Redirect, router } from 'expo-router';
import {SafeAreaView} from 'react-native-safe-area-context';
import {images} from '../constants'; 
import CustomButton from '../components/CustomButton';


LogBox.ignoreAllLogs();

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%'}}>
        <View className="w-full flex items-center min-h-[85vh] px-4 py-10">
          <Image
            source={images.gemlogonew}
            className="w-[400px] h-[200px]"
            resizeMode="contain"
          />

          <CustomButton
            title="Continue"
            handlePress={() => router.push('/signin')}
            containerStyles="w-full mt-7"
          />
          <CustomButton
            title="(Temp)"
            handlePress={() => router.push('/home')}
            containerStyles="w-full mt-7"
          />

        </View>
      </ScrollView>
      <StatusBar backgroundColor='#10142E' style='light'/>
    </SafeAreaView>

  );
}

