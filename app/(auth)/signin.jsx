import { ScrollView, View, Text, Image, KeyboardAvoidingView, Platform, Alert } from 'react-native'
import {React, useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link, router } from 'expo-router'
import {FIREBASE_APP, FIREBASE_AUTH} from '../(auth)/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

const SignIn = () => {
  const [form, setForm] = useState({
    email:'',
    password: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = () => {
    if(form.email === "" || form.password === ""){
      Alert.alert("Error", "Please fill in all fields");
      console.log("failure1!") 
    }
    else if(form.password !== "" && form.password.length < 10){
      Alert.alert("Error", "Password must be at least 10 characters");
      console.log("failure2!") 
    }
    else{
      console.log("Success!")
      signIn()
    }
  }

  const signIn = async () => {
    try{
      const response = await signInWithEmailAndPassword(FIREBASE_AUTH, form.email, form.password)
      console.log(response);
      router.push('/home')
    }
    catch (error){
      console.log(error);
      Alert.alert('Sign in failed: Either your email or password was typed incorrectly' )
    }
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : 'height'} className="flex-1">
      <SafeAreaView className = "bg-primary h-full">
        <ScrollView>
          <View className="w-full justify-center h-full px-4 my-6 ">
            <View className= "items-center">
              <Image source={images.gemlogonew} resizeMode = 'contain' className = "w-[400px] h-[200px]"/>
            </View>
            <Text className="text-2xl text-white text-semibold mt-10 font-psemibold"> Log In </Text>
            <FormField
              title="Email"
              value={form.email}
              handleChangeText={(e) => setForm({ ...form, email: e})}
              otherStyles="mt-7"
              keyboardType="email-address"
            />
            <FormField
              title="Password"
              value={form.password}
              handleChangeText={(e) => setForm({ ...form, password: e})}
              otherStyles="mt-7"
            />

            <CustomButton
              title = "Sign In"
              handlePress={submit}
              containerStyles="mt-7"
              isLoading = {isSubmitting}
            />

            <View className="justify-center pt-5 flex-row gap-2">
              <Text className="text-lg text-gray-100 font-pregular">
                Don't have an account?
              </Text>
              <Link href='/signup' className="text-lg font-psemibold text-secondary">Sign Up</Link>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default SignIn