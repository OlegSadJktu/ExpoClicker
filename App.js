import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import 'react-native-gesture-handler';
import {createStackNavigator} from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "./src/components/HomeScreen";
import  ShopFragment, { myInteger, myInteger as someInteger} from "./src/components/ShopFragment";
import {IncomeProvider} from "./src/context/CounterContext";


const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();


const App = () => {

  return (
    <IncomeProvider>
      <BottomNav>
      </BottomNav>
    </IncomeProvider>

  );
}


function BottomNav ({}) {

  return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          activeColor="#f0edf6"
          inactiveColor="#fff"
          barStyle={{ backgroundColor: '#694fad', color: "#ff0000"}}
        >
           <Tab.Screen name={"Home"} component={HomeScreen}/>
           <Tab.Screen name={"Shop"} component={ShopFragment}/>
         </Tab.Navigator>
        <StatusBar style={"auto"}/>
      </NavigationContainer>

  )
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
