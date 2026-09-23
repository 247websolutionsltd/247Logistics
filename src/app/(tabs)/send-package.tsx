import Button from "@/components/button";
import Container from "@/components/custom-container";
import Input from "@/components/custom-input";
import { ThemedText } from "@/components/themed-text";
import { Colors, Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";

const serviceOptions = ["Door pickup", "Drop off", "Same-day", "Scheduled"];

export default function SendPackage() {
  const theme = useTheme();
  const [selectedService, setSelectedService] = useState("Door pickup");

  return (
    <Container edges={["top"]}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ padding: Spacing.three, paddingBottom: Spacing.five }}>
        <ThemedText type="large" style={{ marginTop: Spacing.three, marginBottom: Spacing.two }}>
          Send a package
        </ThemedText>

        <View style={{ backgroundColor: Colors.primaryDark, borderRadius: 22, padding: Spacing.three }}>
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <View>
              <ThemedText type="small" style={{ color: "#dfeee1" }}>Estimated quote</ThemedText>
              <ThemedText type="title" style={{ color: "#FFF", marginTop: Spacing.one, fontSize: 30 }}>
                $54.00
              </ThemedText>
            </View>

            <View style={{ width: 42, height: 42, borderRadius: 12, backgroundColor: "rgba(120,160,131,0.2)", alignItems: "center", justifyContent: "center" }}>
              <MaterialIcons name="local-shipping" size={22} color="#FFF" />
            </View>
          </View>
        </View>

        <View style={{ marginTop: Spacing.three, backgroundColor: theme.background, borderRadius: 18, borderWidth: 1, borderColor: theme.line, padding: Spacing.three }}>
          <ThemedText type="bold" style={{ marginBottom: Spacing.two }}>Pickup details</ThemedText>
          <Input label="Sender name" placeholder="David Adebayo" />
          <Input label="Pickup address" placeholder="21 Ring Road, Lekki" />
          <Input label="Recipient name" placeholder="Ada Eze" />
          <Input label="Delivery address" placeholder="4 Falomo Road, Ikoyi" />
          <Input label="Package description" placeholder="Electronics / documents / food" desc />
        </View>

        <View style={{ marginTop: Spacing.three }}>
          <ThemedText type="bold" style={{ marginBottom: Spacing.two }}>Service type</ThemedText>
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: Spacing.two }}>
            {serviceOptions.map((option) => (
              <TouchableOpacity
                key={option}
                onPress={() => setSelectedService(option)}
                style={{
                  paddingHorizontal: Spacing.two,
                  paddingVertical: Spacing.one,
                  borderRadius: 999,
                  backgroundColor: selectedService === option ? Colors.primary : theme.accentSurface,
                }}
              >
                <ThemedText type="small" style={{ color: selectedService === option ? "#FFF" : theme.accentText }}>
                  {option}
                </ThemedText>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={{ marginTop: Spacing.three, backgroundColor: theme.accentSurface, borderRadius: 18, padding: Spacing.three }}>
          <ThemedText type="smallBold" style={{ color: theme.accentText }}>Delivery note</ThemedText>
          <ThemedText type="small" style={{ color: theme.textSecondary, marginTop: Spacing.one, lineHeight: 20 }}>
            Packages are tracked every step of the way. A driver will be assigned within 12 minutes for urgent requests.
          </ThemedText>
        </View>

        <Button title="Request pickup" onPress={() => router.back()} style={{ marginTop: Spacing.three }} />
      </ScrollView>
    </Container>
  );
}
