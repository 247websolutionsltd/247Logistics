import { Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { useStyles } from "@/styles/styles";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { ThemedText } from "./themed-text";

type IconName = keyof typeof Ionicons.glyphMap;
interface BackProps extends TouchableOpacityProps{
    title?: string;
    iconLeft?: IconName;
    icon?: IconName;
}
export default function Back({title, onPress, iconLeft, icon}:BackProps){
    const styles = useStyles();
    const theme = useTheme();
    return(
        <TouchableOpacity style={styles.backButton} onPress={onPress}>
            {title ? (
                <View style={styles.row}>
                    {iconLeft && <Ionicons name={iconLeft} size={20} color={theme.text} style={{marginRight:Spacing.one}} />}
                    <ThemedText type="bold">{title}</ThemedText>
                </View>
            ) : (
                <Ionicons name={icon ?? "arrow-back"} size={22} color={theme.text} />
            )}
        </TouchableOpacity>
    )
}