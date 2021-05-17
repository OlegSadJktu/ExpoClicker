import React, {useEffect, useState} from "react";
import {Button, Text, View} from "react-native";
import {defaultStyles} from "../styles/styles";
import {useIncome} from "../context/CounterContext";




const HomeScreen = ({navigation}) => {
  const [cookieCounter, setCookieCounter] = useState(0);
  const {passiveIncome} = useIncome()
  function addPassiveIncome(income) {
    setCookieCounter(cookieCounter + income)
  }
  useEffect(() => {
    const addCounter = setInterval(() => {
      addPassiveIncome(passiveIncome);
    }, 1000);
    return () => clearInterval(addCounter);
  });

  // setInterval(passiveIncome, 1000 , 1)
  return (
    <View style={defaultStyles.flexBlocks}>
      <Text>
        {cookieCounter}
      </Text>
      <Button title={"Add cookie"} onPress={() => {
        setCookieCounter(+cookieCounter + 1)
      }}/>
    </View>

  )
}


export default HomeScreen;
