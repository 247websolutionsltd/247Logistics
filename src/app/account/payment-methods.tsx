import Back from "@/components/back";
import Button from "@/components/button";
import Container from "@/components/custom-container";
import { ThemedText } from "@/components/themed-text";
import { Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { useStyles } from "@/styles/styles";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { TouchableOpacity, View } from "react-native";

const paymentMethods = [
  { label: "Mastercard ending in 2458", detail: "Primary card", icon: "credit-card" },
  { label: "Bank transfer", detail: "Access bank • 7781", icon: "account-balance" },
];

export default function PaymentMethods() {
    const theme = useTheme();
    const styles = useStyles();

  return (
    <Container edges={["top"]}>
      <View style={{ padding: Spacing.three }}>
        <View style={[styles.row, {marginBottom:Spacing.three}]}>
            <Back icon="arrow-back"/>
            <ThemedText type="large" style={{ marginTop: Spacing.three, marginBottom: Spacing.two }}>
               Payment methods
            </ThemedText>
        </View>

        <View style={{ backgroundColor: theme.background, borderRadius: 18, borderWidth: 1, borderColor: theme.line, overflow: "hidden" }}>
          {paymentMethods.map((item, index) => (
            <View
              key={item.label}
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: Spacing.three,
                borderBottomWidth: index === paymentMethods.length - 1 ? 0 : 1,
                borderBottomColor: theme.line,
              }}
            >
              <View style={{ width: 42, height: 42, borderRadius: 12, backgroundColor: theme.accentSurface, alignItems: "center", justifyContent: "center" }}>
                <MaterialIcons name={item.icon as any} size={20} color={theme.accentText} />
              </View>

              <View style={{ flex: 1, marginLeft: Spacing.two }}>
                <ThemedText type="smallBold">{item.label}</ThemedText>
                <ThemedText type="small" style={{ color: theme.textSecondary, marginTop: Spacing.one }}>
                  {item.detail}
                </ThemedText>
              </View>

              <TouchableOpacity>
                <MaterialIcons name="chevron-right" size={20} color={theme.textSecondary} />
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <Button
          title="Add new payment method"
          onPress={() => router.back()}
          type="secondary"
          style={{ marginTop: Spacing.three }}
        />
      </View>
    </Container>
  );
}
