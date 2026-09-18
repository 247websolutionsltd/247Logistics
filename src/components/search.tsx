import { useTheme } from "@/hooks/use-theme";
import { useStyles } from "@/styles/styles";
import { MaterialIcons } from "@expo/vector-icons";
import { TextInput, TouchableOpacityProps, View } from "react-native";

interface SearchProps extends TouchableOpacityProps{
    filter?: boolean;
}
export default function Search({filter, style}:SearchProps){
    const styles = useStyles();
    const theme = useTheme();
    return(
        <View style={[styles.searchView, style]}>
            <MaterialIcons name="search" size={20} color={theme.textSecondary}/>
            <TextInput placeholder="What are you looking for?" style={{flex:1, fontSize:15}} placeholderTextColor={theme.textSecondary}/>
        </View>
    )
}