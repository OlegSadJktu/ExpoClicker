import React from "react";
import {Button, Text, View} from "react-native"
import {defaultStyles} from "../styles/styles";
import ShopCard from "./ShopCard";
import {useIncome} from "../context/CounterContext";


const ShopFragment = () => {
  const {passiveIncome, setPassiveIncome} = useIncome();
  return (
    <View style={defaultStyles.flexBlocks}>
      <Text>
        {passiveIncome}
      </Text>
      <Button title={"Upgrade passive income"} onPress={() => {
        setPassiveIncome(passiveIncome + 1);
      }}/>

    </View>

  )
}




export default ShopFragment;
