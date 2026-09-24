import { useTheme } from "@/hooks/use-theme";
import { useStyles } from "@/styles/styles";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

type IconName = keyof typeof Ionicons.glyphMap;
interface BackProps extends TouchableOpacityProps{
    icon?: IconName;
}
export default function Back({onPress, icon}:BackProps){
    const styles = useStyles();
    const theme = useTheme();
    return(
        <TouchableOpacity style={styles.backButton} onPress={onPress ?? (() => {router.back()})}>
            <Ionicons name={icon ?? "arrow-back"} size={22} color={theme.text} />
        </TouchableOpacity>
    )
}