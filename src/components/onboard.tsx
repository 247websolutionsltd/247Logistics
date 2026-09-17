import { Radius, Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import { ThemedText } from "./themed-text";

const { width, height } = Dimensions.get("window");

const OnboardingItem = ({ item }: any) => {
  const theme = useTheme();
  return (
    <View style={[styles.container, { width, backgroundColor:theme.paper }]}>
      <View style={styles.image}>
        <Image style={{width:300, height:300}} source={item.image} />
      </View>
      <View style={{marginTop:100, paddingHorizontal:Spacing.three,}}>
        <ThemedText type='title' style={{textAlign:'center',}}>{item.title}</ThemedText>
        <ThemedText style={styles.desc}>
          {item.description}
        </ThemedText>
      </View>
    </View>
  );
};

export default OnboardingItem;

const styles = StyleSheet.create({
  container: {
    justifyContent:'center'
  },
  image: {
    alignItems:'center',
    justifyContent:'center',
    // marginTop: Spacing.six
  },
  darken:{
    width:'100%', 
    height:'100%', 
    backgroundColor:"#56566020", 
    position:'absolute'
  },
  textContainer: {
    flex: 1,
    justifyContent:'space-between',
  },
  desc: {
    marginTop: 10,
    opacity: 0.8,
    textAlign:'center'
  },
  bottom:{
    padding:Spacing.three,
    bottom:Spacing.five,
    borderRadius:Radius.lg,
    // justifyContent:'space-between',
    flex:1
  }
});