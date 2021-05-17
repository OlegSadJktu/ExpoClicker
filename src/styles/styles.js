import { StyleSheet } from 'react-native';


const defaultStyles = StyleSheet.create({
  flexBlocks : {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },

  rowDir: {
    flexDirection: "row"
  },

  leftCardElement: {
    flex: 1
  },

  rightCardElement: {
    flex: 2
  }

})

export {defaultStyles};
