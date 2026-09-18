import { Colors, Radius, Spacing } from "@/constants/theme";
import { Dimensions, StyleSheet, useColorScheme } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// export type ThemeType = typeof Colors.light;
export function useStyles() {
  const colorScheme = useColorScheme() ?? 'light';
  const theme = colorScheme === "light" ? Colors.light : Colors.dark;
  const {width, height} = Dimensions.get('window');
  const insets = useSafeAreaInsets();
  // Pass the active theme colors into the factory function below
  return createStyles(theme, width, height, insets);
}


const createStyles = (theme:any, width:any, height:any, insets:any)=>StyleSheet.create({
    button: {
        height:60,
        borderRadius: Radius.sm,
        alignItems: "center",
        justifyContent:'center',
        backgroundColor:Colors.primary 
    },
    button2:{
        borderWidth:1,
        borderColor:theme.line,
        alignItems:'center',
        justifyContent:'center',
        height:60,
        borderRadius:16
    },
    row:{
      flexDirection:'row',
      alignItems:'center',
    },
    rowStretch:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between'
    },
    backButton:{
      borderWidth:1,
      borderColor:theme.text,
      alignItems:'center',
      justifyContent:'center',
      width:'25%',
      marginRight:10,
      height:50,
      borderRadius:16
    },
    skip: {
      position: "absolute",
      top: 50,
      right: 20,
      zIndex: 10,
      padding:Spacing.two,
      backgroundColor:"#5c534232",
      borderRadius:20
    },
    addView:{
      flex:1,
      alignItems:'flex-end',
      justifyContent:'flex-end',
      position:'absolute',
      height,
      width,
      paddingVertical: Spacing.three + 40,
      paddingHorizontal: Spacing.three
    },
    add:{
      padding:12,
      borderRadius:200,
      backgroundColor:Colors.primary
    },
    textInputView:{
      borderWidth:1,
      borderColor:theme.line,
      padding:Spacing.one,
      borderRadius: Radius.sm,
      flexDirection:'row',
      paddingRight:Spacing.two, 
      backgroundColor:theme.background,
      alignItems:'center'
    },
    authImage:{
      height:height/3,
      width:'100%'
    },
    authImageView:{
      flex:1,
      backgroundColor:'#35353535',
      alignItems:'center',
      justifyContent:'flex-end',
      padding:Spacing.five
    },
    line:{
      backgroundColor:theme.line,
      height:1,
      flex:1
    },
    socialRow: {
      flexDirection: "row",
      gap: Spacing.three,
      marginVertical:Spacing.two,
      marginHorizontal:Spacing.three
    },
    socialBtn: {
      flex: 1,
      height: 46,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: theme.line,
      backgroundColor: theme.background,
      alignItems: "center",
      justifyContent: "center",
      flexDirection:'row'
    },
    createLabelView:{
      flexDirection:'row',
      margin:Spacing.three,
      marginBottom:0
    },
    createLabel:{
      height:4,
      borderRadius:Radius.md,
    },
    registerInfo:{
      padding:Spacing.two,
      backgroundColor:theme.contrast,
      borderRadius:Radius.sm
    },
    option:{
      flexDirection:'row',
      alignItems:'center',
      backgroundColor:theme.background,
      padding:Spacing.three,
      borderWidth:1,
      borderRadius:Radius.md,
      marginVertical:Spacing.two,
    },
    optionCircle:{
      borderWidth:1,
      borderColor:theme.line,
      borderRadius:Radius.pill,
      width:20,
      height:20,
      alignItems:'center',
      justifyContent:'center'
    },
    otpContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      padding:Spacing.three-Spacing.one,
    },
    otpInput: {
      width: "100%",
      height: 50,
      borderWidth: 1,
      borderColor: "#777",
      fontSize: 14,
      color: "#555",
      padding: 0,
    },
    otpInputView:{
      padding:Spacing.one
    },
    searchView:{
      flexDirection:'row',
      alignItems:'center',
      borderWidth:1,
      borderColor:theme.line,
      borderRadius:Radius.sm,
      padding:Spacing.one,
      paddingHorizontal:Spacing.two,
      flexShrink:1,
      marginBottom:Spacing.three
    },
    rowWrap:{
      flexDirection:'row',
      flexWrap:'wrap'
    },
    homeCard:{
      width:'100%',
      borderRadius:Radius.md,
      padding:Spacing.two,
      height:200,
      justifyContent:'center',
      paddingVertical:Spacing.four
    },
    homeCardView:{
      width:'50%',
      padding:Spacing.two
    },
    homeProfile:{
      width:50,
      height:50,
      borderRadius:100
    },
    homeAddView:{
      width:15,
      height:15,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:Colors.primaryTint,
      borderRadius:30,
      bottom:10,
      right:5
    },
    profileView:{
      padding:Spacing.three,
      borderRadius:Radius.md,
      backgroundColor:theme.text,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
    },
    profile:{
      borderWidth:1,
      borderColor:theme.line,
      borderRadius:Radius.md,
      backgroundColor:theme.background,
      margin:Spacing.three
    },
    profileInd:{
      flexDirection:'row',
      alignItems:'center',
      padding:Spacing.three,
      borderBottomWidth:1,
      borderColor:theme.line,
    },
    radio:{
      width:40,
      height:20,
      borderRadius:20,
      justifyContent:'center',
      padding:3
    },
    radioCircle:{
      width:16,
      height:16,
      borderRadius:100,
      backgroundColor:"#f7fbf9"
    },
    posterImage:{
      width:55,
      height:55,
      borderRadius:Radius.pill,
      marginRight:Spacing.two
    },
    editButton:{
      padding:Spacing.two,
      borderWidth:1,
      borderColor:Colors.primary,
      borderRadius:Radius.sm,
    },
    notification:{
      paddingVertical:Spacing.three,
      flexDirection:'row',
      alignItems:'center',
      borderBottomWidth:1,
      borderBottomColor:theme.line
    }
});