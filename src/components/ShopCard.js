import React from "react";
import {Text, View} from "react-native";
import {defaultStyles} from "../styles/styles";

const ShopCard = (props) => {
  return (
    <View style={[defaultStyles.flexBlocks, defaultStyles.rowDir]}>
      <Text>
        sdsad
      </Text>
      <View style={defaultStyles.leftCardElement}>
        <Text>
          {props.price}
        </Text>
      </View>
      <View style={defaultStyles.rightCardElement}>
        <Text>
          {props.name}
        </Text>
      </View>
    </View>
  )
}

export default ShopCard;
