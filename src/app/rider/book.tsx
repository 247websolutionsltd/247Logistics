import Back from "@/components/back";
import Button from "@/components/button";
import Container from "@/components/custom-container";
import Input from "@/components/custom-input";
import { ThemedText } from "@/components/themed-text";
import { Colors, Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { router } from "expo-router";
import { useState } from "react";
import { TouchableOpacity, View } from "react-native";

const rideTypes = ["Bike", "Car", "Van"];
export default function BookRider() {
  const theme = useTheme(); const [rideType, setRideType] = useState("Bike");
  return <Container edges={["top"]}><View style={{ padding: Spacing.three }}><Back onPress={() => router.back()} title="Operations" /><ThemedText type="large" style={{ marginTop: Spacing.three }}>Book a rider</ThemedText><ThemedText style={{ color: theme.textSecondary, marginTop: Spacing.one }}>Get a rider assigned to your route in minutes.</ThemedText><View style={{ marginTop: Spacing.three, backgroundColor: theme.background, borderRadius: 18, borderWidth: 1, borderColor: theme.line, padding: Spacing.three }}><Input label="Pickup location" placeholder="21 Ring Road, Lekki" /><Input label="Destination" placeholder="4 Falomo Road, Ikoyi" /><ThemedText type="smallBold" style={{ marginTop: Spacing.two }}>Ride type</ThemedText><View style={{ flexDirection: "row", gap: Spacing.two, marginTop: Spacing.two }}>{rideTypes.map((type) => <TouchableOpacity key={type} onPress={() => setRideType(type)} style={{ borderRadius: 999, paddingHorizontal: Spacing.three, paddingVertical: Spacing.two, backgroundColor: rideType === type ? Colors.primary : theme.accentSurface }}><ThemedText type="small" style={{ color: rideType === type ? "#FFF" : theme.accentText }}>{type}</ThemedText></TouchableOpacity>)}</View></View><Button title="Book rider" onPress={() => router.push("/order-confirmation?orderId=LT-0284" as never)} style={{ marginTop: Spacing.three }} /></View></Container>;
}