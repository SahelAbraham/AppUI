import { ScrollView, View, Text, Image, KeyboardAvoidingView, Platform, Alert } from 'react-native'
import {React, useState, useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link, router } from 'expo-router'
import {FIREBASE_APP, FIREBASE_AUTH} from '../(auth)/firebase'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from 'firebase/auth'

const SignUp = () => {
  const [form, setForm] = useState({
    email:'',
    password: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = () => {
    if(form.email === "" || form.password === ""){
      Alert.alert("Error", "Please fill in all fields");
      console.log("Unfilled Fields Failure") 
    }
    else if(form.password !== "" && form.password.length < 10){
      Alert.alert("Error", "Password must be at least 10 characters");
      console.log("Password Failure") 
    }
    else if(!form.email.includes("@") || !form.email.includes(".")){
      Alert.alert("Error", "Please enter a valid email address")
      console.log("Email Failure")
    }
    else{
      console.log("Success!")
      signUp()
    }
  }
  const signUp = async () => {
    try{
      const response = await createUserWithEmailAndPassword(FIREBASE_AUTH, form.email, form.password)
      console.log(response);
      router.push('/home')
    }
    catch (error){
      console.log(error);
      Alert.alert('Registration failed: ' + error.message )
    }
  }


  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : 'height'} className="flex-1">
      <SafeAreaView className = "bg-primary h-full">
        <ScrollView>
          <View className="w-full justify-center h-full px-4 my-6">
            <Image source={images.gemlogonew} resizeMode = 'contain' className = "w-[400px] h-[200px]"/>
            <View className="flex-row">
              <Text className="text-2xl text-white text-semibold mt-10 font-psemibold"> Sign Up to</Text>
              <Text className="text-2xl text-secondary text-semibold mt-10 font-psemibold"> ARDENT</Text>
            </View>

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
            <Text className="mx-2 text-white">Password must be at least 10 characters</Text>

            <CustomButton
              title = "Sign Up"
              handlePress={submit}
              containerStyles="mt-7"
              isLoading = {isSubmitting}
            />

            <View className="justify-center pt-5 flex-row gap-2">
              <Text className="text-lg text-gray-100 font-pregular">
                Have an account already?
              </Text>
              <Link href='/signin' className="text-lg font-psemibold text-secondary">Sign In</Link>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default SignUp