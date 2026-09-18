import { Colors } from "@/constants/theme";
import { useAuth } from "@/context/PageContext";
import { useTheme } from "@/hooks/use-theme";
import { useStyles } from "@/styles/styles";
import { Image } from "expo-image";
import { TouchableOpacity, View, ViewProps } from "react-native";
import { ThemedText } from "./themed-text";


export default function ProfileView({style}:ViewProps){
    const styles = useStyles();
    const theme = useTheme();
    const {owner} = useAuth();
    return(
        <View style={[styles.profileView, style]}>
            <View style={styles.row}>
                <Image
                    style={styles.posterImage}
                    source={owner.profileImage}
                />
                <View>
                    <ThemedText style={{color:theme.background}} type="bold">{owner.name}</ThemedText>
                    <ThemedText style={{fontSize:12, lineHeight:16, color:theme.background}}>{owner.title}</ThemedText>
                    <ThemedText style={{fontSize:12, lineHeight:16, color:theme.background}}>{owner.license}</ThemedText>
                </View>
            </View>
            <TouchableOpacity style={styles.editButton}>
                <ThemedText type="small" style={{color:Colors.primary}}>Edit</ThemedText>
            </TouchableOpacity>
        </View>
    )
}