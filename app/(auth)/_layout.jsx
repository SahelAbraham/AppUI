import { View, Text } from 'react-native'
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar'
import React from 'react'

const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="signin"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="signup"
          options={{ headerShown: false }}
        />
      </Stack>

      <StatusBar
        backgroundColor="#10142E"
        style="light"
      />       
    </>
  )
}

export default AuthLayout