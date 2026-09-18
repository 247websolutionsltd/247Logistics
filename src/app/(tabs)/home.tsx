import Container from "@/components/custom-container";
import HomeCard from "@/components/homeCard";
import Search from "@/components/search";
import { ThemedText } from "@/components/themed-text";
import { Spacing } from "@/constants/theme";
import homeCardData from "@/data/homeCardData";
import { useTheme } from "@/hooks/use-theme";
import { useStyles } from "@/styles/styles";
import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useState } from "react";
import { TouchableOpacity, View, } from "react-native";

export default function Home(){
    const styles = useStyles();
    const theme = useTheme();
    const [selected, setSelected] = useState(-1)
    return(
        <Container edges={['top']}>
            <View style={{padding:Spacing.three, paddingBottom:0}}>
                <ThemedText type="bold">Welcome David 👋</ThemedText>
                <View style={[styles.rowStretch, {paddingTop:Spacing.one}]}>
                    <ThemedText type="subtitle" style={{width:"50%", lineHeight:23}}>We are ready to serve</ThemedText>
                    <TouchableOpacity style={{alignItems:'flex-end'}}>
                        <Image
                         style={styles.homeProfile}
                         source={{uri:"https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"}}
                        />
                        <View style={styles.homeAddView}>
                            <MaterialIcons name="add" size={12} color={"#FFF"}/>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <Search style={{margin:Spacing.three}}/>
            <View>
                <ThemedText style={{paddingHorizontal:Spacing.three}}>What would you like to do</ThemedText>
                <View style={[styles.rowWrap, {padding:Spacing.two}]}>
                    {
                        homeCardData.map((item, index)=>(
                            <View style={styles.homeCardView} key={index}>
                                <HomeCard
                                    icon={item.icon} 
                                    title={item.title}
                                    desc={item.desc}
                                    selected={selected === index}
                                    onPress={()=>setSelected(index)}
                                />
                            </View>
                        ))
                    }
                </View>
            </View>
        </Container>
    )
}