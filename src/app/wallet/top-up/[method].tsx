import Back from "@/components/back";
import Button from "@/components/button";
import Container from "@/components/custom-container";
import Input from "@/components/custom-input";
import { ThemedText } from "@/components/themed-text";
import { Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { useStyles } from "@/styles/styles";
import { MaterialIcons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { View } from "react-native";

export default function WalletTopUp() { 
    const theme = useTheme(); 
    const styles = useStyles();
    const { method = "card" } = useLocalSearchParams<{ method?: string }>(); 
    const label = `${String(method).charAt(0).toUpperCase()}${String(method).slice(1)}`; 
    return(
        <Container edges={["top"]}>
            <View style={{ padding: Spacing.three }}>
                <View style={[styles.row, {marginBottom:Spacing.three}]}>
                    <Back icon="arrow-back"/>
                    <ThemedText type="large" style={{ marginTop: Spacing.three, marginBottom: Spacing.two }}>
                        Top up by {label}
                    </ThemedText>
                </View>
                <ThemedText style={{ color: theme.textSecondary, marginTop: Spacing.one }}>
                    Add funds securely to your available balance.
                </ThemedText>
                <View style={{ marginTop: Spacing.three, backgroundColor: theme.background, borderRadius: 18, borderWidth: 1, borderColor: theme.line, padding: Spacing.three }}>
                    <View style={{ width: 48, height: 48, borderRadius: 14, backgroundColor: theme.accentSurface, alignItems: "center", justifyContent: "center" }}>
                        <MaterialIcons name={method === "bank" ? "account-balance" : method === "transfer" ? "sync-alt" : "credit-card"} size={24} color={theme.accentText} />
                    </View>
                    <Input label="Amount" placeholder="0.00" number />
                    {
                        method === "card" && 
                        <Input label="Card number" placeholder="0000 0000 0000 0000" number />
                    }
                </View>
                <Button title="Confirm top up" onPress={() => router.push("/order-confirmation?orderId=TOPUP-150" as never)} style={{ marginTop: Spacing.three }} />
            </View>
        </Container>
    ) 
}