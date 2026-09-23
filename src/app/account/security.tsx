import Back from "@/components/back";
import Button from "@/components/button";
import Container from "@/components/custom-container";
import { ThemedText } from "@/components/themed-text";
import { Colors, Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { useStyles } from "@/styles/styles";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, View } from "react-native";

const securityOptions = [
  { title: "Face ID / fingerprint", detail: "Use biometric unlock", active: true },
  { title: "Two-factor authentication", detail: "Protect account access", active: true },
  { title: "Login alerts", detail: "Get notified on sign-ins", active: false },
];

export default function Security() {
  const theme = useTheme();
  const styles = useStyles();
  const [options, setOptions] = useState(securityOptions);

  const toggleOption = (index: number) => {
    setOptions((current) =>
      current.map((item, itemIndex) =>
        itemIndex === index ? { ...item, active: !item.active } : item
      )
    );
  };

  return (
    <Container edges={["top"]}>
      <View style={{ padding: Spacing.three }}>
        <View style={[styles.row, {marginBottom:Spacing.three}]}>
            <Back icon="arrow-back"/>
            <ThemedText type="large" style={{ marginTop: Spacing.three, marginBottom: Spacing.two }}>
              Security
            </ThemedText>
        </View>
        <View style={{ backgroundColor: theme.background, borderRadius: 18, borderWidth: 1, borderColor: theme.line, overflow: "hidden" }}>
          {options.map((item, index) => (
            <View
              key={item.title}
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: Spacing.three,
                borderBottomWidth: index === options.length - 1 ? 0 : 1,
                borderBottomColor: theme.line,
              }}
            >
              <View style={{ width: 42, height: 42, borderRadius: 12, backgroundColor: theme.accentSurface, alignItems: "center", justifyContent: "center" }}>
                <MaterialIcons name={item.active ? "verified-user" : "privacy-tip"} size={20} color={theme.accentText} />
              </View>

              <View style={{ flex: 1, marginLeft: Spacing.two }}>
                <ThemedText type="smallBold">{item.title}</ThemedText>
                <ThemedText type="small" style={{ color: theme.textSecondary, marginTop: Spacing.one }}>
                  {item.detail}
                </ThemedText>
              </View>

              <Pressable
                onPress={() => toggleOption(index)}
                style={{
                  width: 52,
                  height: 28,
                  borderRadius: 999,
                  backgroundColor: item.active ? Colors.primary : theme.controlOff,
                  justifyContent: "center",
                  paddingHorizontal: 4,
                  alignItems: item.active ? "flex-end" : "flex-start",
                }}
              >
                <View style={{ width: 20, height: 20, borderRadius: 999, backgroundColor: theme.controlThumb }} />
              </Pressable>
            </View>
          ))}
        </View>

        <Button
          title="Change password"
          onPress={() => router.back()}
          type="secondary"
          style={{ marginTop: Spacing.three }}
        />
      </View>
    </Container>
  );
}
