import Back from "@/components/back";
import Button from "@/components/button";
import Container from "@/components/custom-container";
import { ThemedText } from "@/components/themed-text";
import { Spacing } from "@/constants/theme";
import { getOrder } from "@/data/orderData";
import { useTheme } from "@/hooks/use-theme";
import { MaterialIcons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { View } from "react-native";

export default function OrderDetail() {
  const theme = useTheme();
  const { id } = useLocalSearchParams<{ id?: string }>();
  const order = getOrder(id);
  return <Container edges={["top"]}><View style={{ padding: Spacing.three }}><Back onPress={() => router.back()} title="Orders" /><View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: Spacing.three }}><View><ThemedText type="large">Order details</ThemedText><ThemedText type="small" style={{ color: theme.textSecondary }}>{order.id} · {order.placedAt}</ThemedText></View><View style={{ backgroundColor: theme.accentSurface, borderRadius: 999, paddingHorizontal: Spacing.two, paddingVertical: Spacing.one }}><ThemedText type="smallBold" style={{ color: theme.accentText }}>{order.status}</ThemedText></View></View>
    <View style={{ marginTop: Spacing.three, backgroundColor: theme.background, borderRadius: 18, borderWidth: 1, borderColor: theme.line, padding: Spacing.three }}><ThemedText type="bold">Route</ThemedText><View style={{ flexDirection: "row", marginTop: Spacing.three }}><MaterialIcons name="trip-origin" size={20} color={theme.accentText} /><View style={{ marginLeft: Spacing.two }}><ThemedText type="smallBold">Pickup</ThemedText><ThemedText type="small" style={{ color: theme.textSecondary }}>{order.pickup}</ThemedText></View></View><View style={{ borderLeftWidth: 1, borderLeftColor: theme.line, height: 20, marginLeft: 9 }} /><View style={{ flexDirection: "row" }}><MaterialIcons name="location-on" size={20} color={theme.accentText} /><View style={{ marginLeft: Spacing.two }}><ThemedText type="smallBold">Delivery</ThemedText><ThemedText type="small" style={{ color: theme.textSecondary }}>{order.destination}</ThemedText></View></View></View>
    <View style={{ marginTop: Spacing.three, backgroundColor: theme.accentSurface, borderRadius: 18, padding: Spacing.three }}><ThemedText type="small" style={{ color: theme.textSecondary }}>Delivery estimate</ThemedText><ThemedText type="bold" style={{ marginTop: Spacing.one, color: theme.accentText }}>{order.eta}</ThemedText><ThemedText type="small" style={{ color: theme.textSecondary, marginTop: Spacing.two }}>Delivery fee: ₦{order.price}</ThemedText></View><Button title="Track shipment" onPress={() => router.push(`/track-shipment?orderId=${order.id}` as never)} style={{ marginTop: Spacing.three }} /></View></Container>;
}