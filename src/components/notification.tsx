import { Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { useStyles } from "@/styles/styles";
import { MaterialIcons } from "@expo/vector-icons";
import { ComponentProps } from "react";
import { TouchableOpacity, View } from "react-native";
import { ThemedText } from "./themed-text";

interface NotificationProps{
    icon: ComponentProps<typeof MaterialIcons>['name'];
    title: string;
    desc: string;
    end?: boolean;
}
export default function NotificationCard({icon, title, desc, end=false}:NotificationProps){
    const styles = useStyles();
    const theme = useTheme();
    return(
        <TouchableOpacity style={styles.notification}>
            <MaterialIcons name={icon} size={25} color={theme.text}/>
            <View style={{marginLeft:Spacing.two}}>
                <ThemedText type="bold">{title}</ThemedText>
                <ThemedText style={{fontSize:13}}>{desc}</ThemedText>
            </View>
        </TouchableOpacity>
    )
}