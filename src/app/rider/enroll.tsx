import Back from "@/components/back";
import Button from "@/components/button";
import Container from "@/components/custom-container";
import Input from "@/components/custom-input";
import { ThemedText } from "@/components/themed-text";
import { Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { View } from "react-native";

export default function EnrollRider() { const theme = useTheme(); return <Container edges={["top"]}><View style={{ padding: Spacing.three }}><Back onPress={() => router.back()} title="Operations" /><ThemedText type="large" style={{ marginTop: Spacing.three }}>Enroll as a rider</ThemedText><ThemedText style={{ color: theme.textSecondary, marginTop: Spacing.one }}>Join the 24/7 Logistics delivery network.</ThemedText><View style={{ marginTop: Spacing.three, backgroundColor: theme.background, borderRadius: 18, borderWidth: 1, borderColor: theme.line, padding: Spacing.three }}><Input label="Full name" placeholder="Your name" /><Input label="Phone number" placeholder="0800 000 0000" number /><Input label="Vehicle type" placeholder="Bike, car, or van" /><View style={{ marginTop: Spacing.two, borderWidth: 1, borderColor: theme.line, borderRadius: 14, padding: Spacing.three, flexDirection: "row", alignItems: "center" }}><MaterialIcons name="upload-file" size={22} color={theme.accentText} /><View style={{ marginLeft: Spacing.two, flex: 1 }}><ThemedText type="smallBold">Upload license</ThemedText><ThemedText type="small" style={{ color: theme.textSecondary }}>Placeholder for document upload</ThemedText></View></View></View><Button title="Submit application" onPress={() => router.back()} style={{ marginTop: Spacing.three }} /></View></Container>; }