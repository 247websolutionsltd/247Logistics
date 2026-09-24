import { Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { useStyles } from "@/styles/styles";
import { MaterialIcons } from "@expo/vector-icons";
import { ComponentProps } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { ThemedText } from "./themed-text";

interface CardProps extends TouchableOpacityProps{
    icon: ComponentProps<typeof MaterialIcons>['name'];
    title: string;
    desc: string;
}
export default function HomeCard({icon, title, desc, onPress}:CardProps){
    const styles = useStyles();
    const theme = useTheme();
    return(
        <TouchableOpacity style={styles.homeCard} onPress={onPress}>
            <MaterialIcons name={icon} size={40} color={theme.accentText}/>
            <ThemedText type="bold" style={{marginTop:Spacing.two, color:theme.accentText}}>{title}</ThemedText>
            <ThemedText style={{fontSize:10, lineHeight:10, marginTop:Spacing.half, color:theme.accentText}}>
                {desc}
            </ThemedText>
        </TouchableOpacity>
    )
}
