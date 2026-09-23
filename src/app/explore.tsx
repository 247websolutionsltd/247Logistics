import Container from "@/components/custom-container";
import { ThemedText } from "@/components/themed-text";
import { Colors, Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { TouchableOpacity, View } from "react-native";

const serviceCards = [
    { title: "Track shipment", subtitle: "Live parcel tracking", icon: "location-searching" },
    { title: "Fleet status", subtitle: "12 riders online", icon: "local-shipping" },
    { title: "Service zones", subtitle: "7 active areas", icon: "map" },
    { title: "Support desk", subtitle: "24/7 help center", icon: "headset-mic" },
];

const zoneMetrics = [
    { label: "Deliveries today", value: "426", change: "+12%" },
    { label: "Avg. ETA", value: "18 min", change: "-4 min" },
    { label: "Capacity", value: "74%", change: "High" },
];

export default function Explore() {
    const theme = useTheme();

    return (
        <Container edges={["top"]}>
            <View style={{ padding: Spacing.three }}>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <ThemedText type="large">Operations</ThemedText>
                    <TouchableOpacity onPress={() => router.push({ pathname: "/search-results", params: { query: "" } } as never)}>
                        <ThemedText type="small" style={{ color: theme.accentText }}>Filters</ThemedText>
                    </TouchableOpacity>
                </View>

                <View
                    style={{
                        marginTop: Spacing.three,
                        backgroundColor: Colors.primaryDark,
                        borderRadius: 24,
                        padding: Spacing.three,
                    }}
                >
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <ThemedText type="small" style={{ color: "#dfeee1" }}>Live route overview</ThemedText>
                        <View
                            style={{
                                backgroundColor: "rgba(120, 160, 131, 0.2)",
                                borderRadius: 999,
                                paddingHorizontal: Spacing.two,
                                paddingVertical: 4,
                            }}
                        >
                            <ThemedText type="small" style={{ color: "#fff", fontSize: 11 }}>Live</ThemedText>
                        </View>
                    </View>

                    <View
                        style={{
                            marginTop: Spacing.three,
                            height: 150,
                            borderRadius: 18,
                            backgroundColor: "rgba(255,255,255,0.06)",
                            padding: Spacing.three,
                            justifyContent: "space-between",
                        }}
                    >
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <View style={{ width: 18, height: 18, borderRadius: 9, backgroundColor: Colors.primary }} />
                            <View style={{ width: 18, height: 18, borderRadius: 9, backgroundColor: "#dfeee1" }} />
                            <View style={{ width: 18, height: 18, borderRadius: 9, backgroundColor: Colors.primary }} />
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "flex-end" }}>
                            <View style={{ width: 30, height: 42, backgroundColor: "rgba(120,160,131,0.5)", borderRadius: 12 }} />
                            <View style={{ width: 30, height: 64, backgroundColor: "rgba(120,160,131,0.7)", borderRadius: 12 }} />
                            <View style={{ width: 30, height: 54, backgroundColor: "rgba(120,160,131,0.6)", borderRadius: 12 }} />
                            <View style={{ width: 30, height: 72, backgroundColor: "rgba(120,160,131,0.85)", borderRadius: 12 }} />
                        </View>
                    </View>
                </View>
            </View>

            <View style={{ paddingHorizontal: Spacing.three, marginTop: Spacing.three }}>
                <ThemedText type="bold" style={{ marginBottom: Spacing.two }}>Performance</ThemedText>
                <View style={{ flexDirection: "row", gap: Spacing.two }}>
                    {zoneMetrics.map((item) => (
                        <View
                            key={item.label}
                            style={{
                                flex: 1,
                                backgroundColor: theme.background,
                                borderRadius: 18,
                                borderWidth: 1,
                                borderColor: theme.line,
                                padding: Spacing.two,
                            }}
                        >
                            <ThemedText type="small" style={{ color: theme.textSecondary }}>{item.label}</ThemedText>
                            <ThemedText type="bold" style={{ marginTop: Spacing.one }}>{item.value}</ThemedText>
                            <ThemedText type="small" style={{ marginTop: Spacing.one, color: theme.accentText }}>
                                {item.change}
                            </ThemedText>
                        </View>
                    ))}
                </View>
            </View>

            <View style={{ paddingHorizontal: Spacing.three, marginTop: Spacing.three }}>
                <ThemedText type="bold" style={{ marginBottom: Spacing.two }}>Explore services</ThemedText>
                <View style={{ flexDirection: "row", flexWrap: "wrap", marginHorizontal: -Spacing.one }}>
                    {serviceCards.map((item) => (
                        <TouchableOpacity
                            key={item.title}
                            onPress={() => item.title === "Track shipment" ? router.push("/track-shipment?orderId=LT-0204" as never) : item.title === "Support desk" ? router.push("/support" as never) : undefined}
                            style={{
                                width: "48%",
                                margin: Spacing.one,
                                backgroundColor: theme.background,
                                borderRadius: 18,
                                borderWidth: 1,
                                borderColor: theme.line,
                                padding: Spacing.three,
                            }}
                        >
                            <View
                                style={{
                                    width: 42,
                                    height: 42,
                                    borderRadius: 12,
                                    backgroundColor: theme.accentSurface,
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <MaterialIcons name={item.icon as any} size={20} color={theme.accentText} />
                            </View>
                            <ThemedText type="smallBold" style={{ marginTop: Spacing.two }}>{item.title}</ThemedText>
                            <ThemedText type="small" style={{ color: theme.textSecondary, marginTop: Spacing.one }}>
                                {item.subtitle}
                            </ThemedText>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </Container>
    );
}
