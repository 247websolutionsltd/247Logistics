import { useTheme } from "@/hooks/use-theme";
import { useStyles } from "@/styles/styles";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import { ThemedText } from "./themed-text";

export default function TopUp(){
    const styles = useStyles();
    const theme = useTheme();
    return(
         <View style={styles.topUp}>
            <ThemedText>Top Up</ThemedText>
            <View style={styles.row}>
                <TouchableOpacity style={styles.topUpContainer} onPress={() => router.push("/wallet/top-up/bank" as never)}>
                    <View style={styles.topUpView}>
                        <MaterialIcons name="account-balance" color={"#FFF"} size={25}/>
                    </View>
                    <ThemedText style={{fontSize:13, lineHeight:20}}>Bank</ThemedText>
                </TouchableOpacity>

                <TouchableOpacity style={styles.topUpContainer} onPress={() => router.push("/wallet/top-up/transfer" as never)}>
                    <View style={styles.topUpView}>
                        <MaterialIcons name="sync-alt" color={"#FFF"} size={25}/>
                    </View>
                    <ThemedText style={{fontSize:13, lineHeight:20}}>Transfer</ThemedText>
                </TouchableOpacity>

                <TouchableOpacity style={styles.topUpContainer} onPress={() => router.push("/wallet/top-up/card" as never)}>
                    <View style={styles.topUpView}>
                        <MaterialIcons name="credit-card" color={"#FFF"} size={25}/>
                    </View>
                    <ThemedText style={{fontSize:13, lineHeight:20}}>Card</ThemedText>
                </TouchableOpacity>
            </View>
        </View>
    )
}