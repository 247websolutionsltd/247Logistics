import { Spacing } from "@/constants/theme";
import { useAuth } from "@/context/PageContext";
import { useTheme } from "@/hooks/use-theme";
import { useStyles } from "@/styles/styles";
import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useState } from "react";
import { TouchableOpacity, View, ViewProps } from "react-native";
import { ThemedText } from "./themed-text";


export default function ProfileView({style}:ViewProps){
    const styles = useStyles();
    const theme = useTheme();
    const {owner} = useAuth();
    const [ visible, setVisible ] = useState(true);
    return(
        <View style={[styles.profileView, style]}>
            <View style={styles.row}>
                <Image
                    style={styles.posterImage}
                    source={owner.profileImage}
                />
                <View>
                    <ThemedText style={{color:theme.background}} type="bold">{owner.name}</ThemedText>
                    <ThemedText style={{fontSize:12, lineHeight:16, color:theme.background}}>Current balance: {visible?"₦"+owner.balance:"****"}</ThemedText>
                </View>
            </View>
            <TouchableOpacity onPress={()=>setVisible(!visible)}>
                <MaterialIcons name={visible?"visibility-off":"visibility"} color={"#FFF"} size={18} style={{marginLeft:Spacing.two}}/>
            </TouchableOpacity>
        </View>
    )
}