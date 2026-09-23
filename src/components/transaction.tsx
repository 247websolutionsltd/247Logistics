import { useTheme } from "@/hooks/use-theme";
import { useStyles } from "@/styles/styles";
import { TouchableOpacity, View } from "react-native";
import { ThemedText } from "./themed-text";

interface TransactionProps{
    title: string;
    date: string;
    price: string;
}
export default function Transaction({title, date, price}:TransactionProps){
    const styles = useStyles();
    const theme = useTheme();
    return(
        <TouchableOpacity style={styles.transaction}>
            <View>
                <ThemedText type="bold">{title}</ThemedText>
                <ThemedText style={{fontSize:13, lineHeight:15}}>{date}</ThemedText>
            </View>
            <ThemedText>₦{price}</ThemedText>
        </TouchableOpacity>
    )
}