import { StyleSheet } from "react-native";
import { Colors, Fonts, Layout, Screen } from "../../config";

export default StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: Colors.backgroundColor,
    justifyContent:'center',
    alignItems:'center'
  },
  goBack:{
    fontFamily:Fonts.Regular,
    fontSize:16
  }
  
})