import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import 'react-native-gesture-handler';
import {createStackNavigator} from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "./src/components/HomeScreen";
import  { ShopFragment ,myInteger, myInteger as someInteger} from "./src/components/ShopFragment";


const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

someInteger = 23;
myInteger = 23;

const App = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Text>

            </Text>
            <Tab.Screen name={"Home"} component={HomeScreen}/>
            <Tab.Screen name={"Shop"} component={ShopFragment}/>
        </Tab.Navigator>
      <StatusBar style={"auto"}/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App;
