import Back from "@/components/back";
import Button from "@/components/button";
import Container from "@/components/custom-container";
import { ThemedText } from "@/components/themed-text";
import { Colors, Spacing } from "@/constants/theme";
import { getOrder } from "@/data/orderData";
import { useTheme } from "@/hooks/use-theme";
import { MaterialIcons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { View } from "react-native";

const timeline = ["Order placed", "Picked up", "In transit", "Delivered"];

export default function TrackShipment() {
  const theme = useTheme();
  const { orderId } = useLocalSearchParams<{ orderId?: string }>();
  const order = getOrder(orderId);
  const currentStep = timeline.indexOf(order.status);

  return (
    <Container edges={["top"]}>
      <View style={{ padding: Spacing.three }}>
        <Back onPress={() => router.back()} title="Shipment" />
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end", marginTop: Spacing.three }}>
          <View>
            <ThemedText type="large">Track shipment</ThemedText>
            <ThemedText type="small" style={{ color: theme.textSecondary, marginTop: Spacing.one }}>{order.id} · {order.title}</ThemedText>
          </View>
          <ThemedText type="smallBold" style={{ color: theme.accentText }}>{order.status}</ThemedText>
        </View>

        <View style={{ marginTop: Spacing.three, height: 180, borderRadius: 20, backgroundColor: theme.accentSurface, borderWidth: 1, borderColor: theme.line, padding: Spacing.three, justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <MaterialIcons name="location-on" size={24} color={theme.accentText} />
            <MaterialIcons name="local-shipping" size={28} color={Colors.primary} />
            <MaterialIcons name="flag" size={24} color={theme.accentText} />
          </View>
          <View style={{ height: 3, backgroundColor: theme.line }}><View style={{ width: `${Math.max(25, ((currentStep + 1) / timeline.length) * 100)}%`, height: 3, backgroundColor: Colors.primary }} /></View>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <ThemedText type="small" style={{ color: theme.textSecondary }}>{order.pickup}</ThemedText>
            <ThemedText type="small" style={{ color: theme.textSecondary, textAlign: "right", maxWidth: "45%" }}>{order.destination}</ThemedText>
          </View>
        </View>

        <View style={{ marginTop: Spacing.three, backgroundColor: theme.background, borderRadius: 18, borderWidth: 1, borderColor: theme.line, padding: Spacing.three }}>
          <ThemedText type="bold" style={{ marginBottom: Spacing.two }}>Delivery progress</ThemedText>
          {timeline.map((step, index) => {
            const complete = index <= currentStep;
            return <View key={step} style={{ flexDirection: "row", alignItems: "center", paddingVertical: Spacing.one }}>
              <View style={{ width: 24, height: 24, borderRadius: 12, backgroundColor: complete ? Colors.primary : theme.backgroundElement, alignItems: "center", justifyContent: "center" }}>
                {complete && <MaterialIcons name="check" size={15} color="#FFF" />}
              </View>
              <ThemedText type={index === currentStep ? "smallBold" : "small"} style={{ marginLeft: Spacing.two, color: index === currentStep ? theme.accentText : theme.textSecondary }}>{step}</ThemedText>
            </View>;
          })}
        </View>

        <View style={{ marginTop: Spacing.three, backgroundColor: theme.background, borderRadius: 18, borderWidth: 1, borderColor: theme.line, padding: Spacing.three }}>
          <ThemedText type="bold">Your driver</ThemedText>
          <View style={{ flexDirection: "row", alignItems: "center", marginTop: Spacing.two }}>
            <View style={{ width: 42, height: 42, borderRadius: 14, backgroundColor: theme.accentSurface, alignItems: "center", justifyContent: "center" }}><MaterialIcons name="person" size={22} color={theme.accentText} /></View>
            <View style={{ flex: 1, marginLeft: Spacing.two }}><ThemedText type="smallBold">{order.driver}</ThemedText><ThemedText type="small" style={{ color: theme.textSecondary }}>{order.vehicle}</ThemedText></View>
            <MaterialIcons name="phone" size={20} color={theme.accentText} />
          </View>
        </View>

        <Button title="View order details" type="secondary" onPress={() => router.push(`/order/${order.id}` as never)} style={{ marginTop: Spacing.three }} />
      </View>
    </Container>
  );
}