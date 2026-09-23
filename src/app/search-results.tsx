import Back from "@/components/back";
import Container from "@/components/custom-container";
import { ThemedText } from "@/components/themed-text";
import { Spacing } from "@/constants/theme";
import searchResults from "@/data/searchResults";
import { useTheme } from "@/hooks/use-theme";
import { MaterialIcons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { TouchableOpacity, View } from "react-native";

export default function SearchResults() {
  const theme = useTheme();
  const { query = "" } = useLocalSearchParams<{ query?: string }>();
  const filtered = searchResults.filter((item) => `${item.title} ${item.detail} ${item.id}`.toLowerCase().includes(String(query).toLowerCase()));
  return <Container edges={["top"]}><View style={{ padding: Spacing.three }}><Back onPress={() => router.back()} title="Search" /><ThemedText type="large" style={{ marginTop: Spacing.three }}>Search results</ThemedText><ThemedText type="small" style={{ color: theme.textSecondary, marginTop: Spacing.one }}>{query ? `Results for “${query}”` : "Recent shipments and wallet activity"}</ThemedText><View style={{ marginTop: Spacing.three }}>{(filtered.length ? filtered : searchResults).map((item) => <TouchableOpacity key={item.id} onPress={() => item.id.startsWith("LT-") && router.push(`/order/${item.id}` as never)} style={{ flexDirection: "row", alignItems: "center", padding: Spacing.three, marginBottom: Spacing.two, borderRadius: 18, borderWidth: 1, borderColor: theme.line, backgroundColor: theme.background }}><View style={{ width: 42, height: 42, borderRadius: 12, alignItems: "center", justifyContent: "center", backgroundColor: theme.accentSurface }}><MaterialIcons name={item.icon} size={20} color={theme.accentText} /></View><View style={{ flex: 1, marginLeft: Spacing.two }}><ThemedText type="smallBold">{item.title}</ThemedText><ThemedText type="small" style={{ color: theme.textSecondary }}>{item.detail}</ThemedText></View><ThemedText type="small" style={{ color: theme.accentText }}>{item.status}</ThemedText></TouchableOpacity>)}</View></View></Container>;
}