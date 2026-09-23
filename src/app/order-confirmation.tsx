import Button from "@/components/button";
import Container from "@/components/custom-container";
import { ThemedText } from "@/components/themed-text";
import { Colors, Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { router, useLocalSearchParams } from "expo-router";
import { View } from "react-native";

export default function OrderConfirmation() {
  const theme = useTheme();
  const { orderId = "LT-0284" } = useLocalSearchParams<{ orderId?: string }>();
  return <Container edges={["top"]}><View style={{ flex: 1, padding: Spacing.three, justifyContent: "center" }}>
    <View style={{ alignItems: "center" }}><View style={{ width: 76, height: 76, borderRadius: 38, backgroundColor: Colors.primary, alignItems: "center", justifyContent: "center" }}><ThemedText type="title" style={{ color: "#FFF" }}>✓</ThemedText></View><ThemedText type="large" style={{ marginTop: Spacing.three, textAlign: "center" }}>Pickup requested</ThemedText><ThemedText style={{ textAlign: "center", marginTop: Spacing.one }}>Your shipment has been created and a rider will be assigned shortly.</ThemedText></View>
    <View style={{ marginTop: Spacing.four, padding: Spacing.three, borderRadius: 18, borderWidth: 1, borderColor: theme.line, backgroundColor: theme.background }}><ThemedText type="small" style={{ color: theme.accentText }}>ORDER ID</ThemedText><ThemedText type="bold" style={{ marginTop: Spacing.one }}>{orderId}</ThemedText><ThemedText type="small" style={{ marginTop: Spacing.three }}>Pickup: 21 Ring Road, Lekki</ThemedText><ThemedText type="small" style={{ marginTop: Spacing.one }}>Delivery: 4 Falomo Road, Ikoyi</ThemedText><ThemedText type="small" style={{ marginTop: Spacing.one }}>Estimated pickup: Today, within 12 minutes</ThemedText></View>
    <Button title="Track shipment" onPress={() => router.push(`/track-shipment?orderId=${orderId}` as never)} style={{ marginTop: Spacing.four }} /><Button title="Back to home" type="secondary" onPress={() => router.replace("/(tabs)/home")} style={{ marginTop: Spacing.two }} />
  </View></Container>;
}