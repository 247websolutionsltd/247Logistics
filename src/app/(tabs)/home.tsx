import Container from "@/components/custom-container";
import HomeCard from "@/components/homeCard";
import Search from "@/components/search";
import { ThemedText } from "@/components/themed-text";
import { Spacing } from "@/constants/theme";
import homeCardData from "@/data/homeCardData";
import { useTheme } from "@/hooks/use-theme";
import { useStyles } from "@/styles/styles";
import { useState } from "react";
import { View } from "react-native";

export default function Home(){
    const styles = useStyles();
    const theme = useTheme();
    const [selected, setSelected] = useState(-1)
    return(
        <Container edges={['top']}>
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