import Container from "@/components/custom-container";
import HomeCard from "@/components/homeCard";
import Search from "@/components/search";
import { ThemedText } from "@/components/themed-text";
import { Colors, Spacing } from "@/constants/theme";
import homeCardData from "@/data/homeCardData";
import { useTheme } from "@/hooks/use-theme";
import { useStyles } from "@/styles/styles";
import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useMemo, useState } from "react";
import { TouchableOpacity, View } from "react-native";

const dashboardStats = [
    { label: "Trips today", value: "18", icon: "local-shipping" as const },
    { label: "On time", value: "96%", icon: "check-circle" as const },
    { label: "Revenue", value: "$845", icon: "payments" as const },
];

const activeRoutes = [
    { id: "LT-204", route: "Lagos Port → Ikeja Depot", eta: "12 mins", status: "On route" },
    { id: "LT-118", route: "Yaba → Lekki Phase 1", eta: "28 mins", status: "In transit" },
];

const recentActivity = [
    { title: "Package delivered", detail: "Order #0421 • Mainland Hub", time: "11:30 AM" },
    { title: "Driver dispatched", detail: "J. Okafor • 2 parcels", time: "09:15 AM" },
    { title: "Wallet funded", detail: "Top-up of $150.00", time: "Yesterday" },
];

export default function Home() {
    const styles = useStyles();
    const theme = useTheme();
    const [selected, setSelected] = useState(-1);

    const selectedService = useMemo(() => {
        if (selected >= 0) {
            return homeCardData[selected].title;
        }

        return "Customer Care";
    }, [selected]);

    return (
        <Container edges={["top"]}>
            <View style={{ padding: Spacing.three, paddingBottom: 0 }}>
                <View style={[styles.rowStretch, { alignItems: "flex-start" }]}>
                    <View>
                        <ThemedText type="small" style={{ color: theme.textSecondary }}>Good morning</ThemedText>
                        <ThemedText type="bold" style={{ marginTop: Spacing.one }}>Welcome David 👋</ThemedText>
                    </View>
                    <TouchableOpacity style={{ alignItems: "flex-end" }}>
                        <Image
                            style={styles.homeProfile}
                            source={{
                                uri: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",
                            }}
                        />
                        <View style={styles.homeAddView}>
                            <MaterialIcons name="add" size={12} color="#FFF" />
                        </View>
                    </TouchableOpacity>
                </View>

                <View
                    style={{
                        marginTop: Spacing.three,
                        backgroundColor: Colors.primaryDark,
                        borderRadius: 22,
                        padding: Spacing.three,
                    }}
                >
                    <View style={[styles.rowStretch, { alignItems: "flex-start" }]}>
                        <View style={{ flex: 1 }}>
                            <ThemedText type="small" style={{ color: "#dfeee1" }}>Available balance</ThemedText>
                            <ThemedText type="title" style={{ marginTop: Spacing.one, color: "#FFF", fontSize: 32 }}>
                                $2,480.60
                            </ThemedText>
                        </View>
                        <View
                            style={{
                                width: 42,
                                height: 42,
                                borderRadius: 14,
                                backgroundColor: "rgba(120, 160, 131, 0.25)",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <MaterialIcons name="bolt" size={20} color="#FFF" />
                        </View>
                    </View>

                    <View style={[styles.rowStretch, { marginTop: Spacing.three, alignItems: "stretch" }]}>
                        {dashboardStats.map((item) => (
                            <View
                                key={item.label}
                                style={{
                                    flex: 1,
                                    backgroundColor: "rgba(255,255,255,0.08)",
                                    borderRadius: 14,
                                    padding: Spacing.two,
                                    marginHorizontal: Spacing.half,
                                }}
                            >
                                <MaterialIcons name={item.icon} size={18} color="#dfeee1" />
                                <ThemedText type="small" style={{ marginTop: Spacing.one, color: "#dfeee1" }}>
                                    {item.label}
                                </ThemedText>
                                <ThemedText type="bold" style={{ marginTop: Spacing.half, color: "#FFF" }}>
                                    {item.value}
                                </ThemedText>
                            </View>
                        ))}
                    </View>
                </View>
            </View>

            <Search style={{ marginHorizontal: Spacing.three, marginTop: Spacing.three }} />

            <View style={{ paddingHorizontal: Spacing.three, marginTop: Spacing.three }}>
                <View style={[styles.rowStretch, { marginBottom: Spacing.two }]}>
                    <ThemedText type="bold">Quick actions</ThemedText>
                    <TouchableOpacity>
                        <ThemedText type="small" style={{ color: theme.accentText }}>View all</ThemedText>
                    </TouchableOpacity>
                </View>

                <View style={[styles.rowWrap, { marginHorizontal: -Spacing.two }]}>
                    {homeCardData.map((item, index) => (
                        <View style={styles.homeCardView} key={index}>
                            <HomeCard
                                icon={item.icon}
                                title={item.title}
                                desc={item.desc}
                                selected={selected === index}
                                onPress={() => setSelected(index)}
                            />
                        </View>
                    ))}
                </View>
            </View>

            <View style={{ paddingHorizontal: Spacing.three, marginTop: Spacing.three }}>
                <View style={[styles.rowStretch, { marginBottom: Spacing.two }]}>
                    <ThemedText type="bold">Active delivery lanes</ThemedText>
                    <TouchableOpacity>
                        <ThemedText type="small" style={{ color: theme.accentText }}>Today</ThemedText>
                    </TouchableOpacity>
                </View>

                <View
                    style={{
                        backgroundColor: theme.background,
                        borderRadius: 18,
                        borderWidth: 1,
                        borderColor: theme.line,
                        padding: Spacing.two,
                    }}
                >
                    {activeRoutes.map((route) => (
                        <View
                            key={route.id}
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                paddingVertical: Spacing.two,
                                borderBottomWidth: route.id === activeRoutes[activeRoutes.length - 1].id ? 0 : 1,
                                borderBottomColor: theme.line,
                            }}
                        >
                            <View style={{ flex: 1, marginRight: Spacing.two }}>
                                <View style={[styles.row, { marginBottom: Spacing.one }]}>
                                    <MaterialIcons name="route" size={16} color={Colors.primary} style={{ marginRight: Spacing.one }} />
                                    <ThemedText type="smallBold">{route.id}</ThemedText>
                                    <View
                                        style={{
                                            marginLeft: Spacing.one,
                                            paddingHorizontal: Spacing.one,
                                            paddingVertical: 2,
                                            borderRadius: 999,
                                            backgroundColor: theme.accentSurface,
                                        }}
                                    >
                                        <ThemedText type="small" style={{ color: theme.accentText, fontSize: 11 }}>
                                            {route.status}
                                        </ThemedText>
                                    </View>
                                </View>
                                <ThemedText type="small" style={{ color: theme.textSecondary, lineHeight: 18 }}>
                                    {route.route}
                                </ThemedText>
                            </View>
                            <View style={{ alignItems: "flex-end" }}>
                                <ThemedText type="smallBold" style={{ color: theme.accentText }}>{route.eta}</ThemedText>
                                <ThemedText type="small" style={{ color: theme.textSecondary }}>ETA</ThemedText>
                            </View>
                        </View>
                    ))}
                </View>
            </View>

            <View style={{ paddingHorizontal: Spacing.three, marginTop: Spacing.three, paddingBottom: Spacing.three }}>
                <View style={[styles.rowStretch, { marginBottom: Spacing.two }]}>
                    <ThemedText type="bold">{selectedService}</ThemedText>
                    <TouchableOpacity>
                        <ThemedText type="small" style={{ color: theme.accentText }}>See details</ThemedText>
                    </TouchableOpacity>
                </View>

                <View
                    style={{
                        backgroundColor: theme.accentSurface,
                        borderRadius: 18,
                        padding: Spacing.three,
                    }}
                >
                    <ThemedText type="small" style={{ color: theme.accentText, marginBottom: Spacing.one }}>
                        Ready to serve
                    </ThemedText>
                    <ThemedText type="small" style={{ color: theme.textSecondary, lineHeight: 20 }}>
                        {selected >= 0
                            ? homeCardData[selected].desc
                            : "Our fleet is active and ready to handle your delivery requests with real-time tracking and fast dispatch support."}
                    </ThemedText>
                </View>

                <View style={{ marginTop: Spacing.three }}>
                    <View style={[styles.rowStretch, { marginBottom: Spacing.two }]}>
                        <ThemedText type="bold">Recent activity</ThemedText>
                        <TouchableOpacity>
                            <ThemedText type="small" style={{ color: theme.accentText }}>All</ThemedText>
                        </TouchableOpacity>
                    </View>

                    {recentActivity.map((item, index) => (
                        <View
                            key={item.title}
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                paddingVertical: Spacing.two,
                                borderBottomWidth: index === recentActivity.length - 1 ? 0 : 1,
                                borderBottomColor: theme.line,
                            }}
                        >
                            <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
                                <View
                                    style={{
                                        width: 38,
                                        height: 38,
                                        borderRadius: 12,
                                        backgroundColor: theme.accentSurface,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        marginRight: Spacing.two,
                                    }}
                                >
                                    <MaterialIcons name={index === 0 ? "local-shipping" : index === 1 ? "person-pin-circle" : "payments"} size={18} color={theme.accentText} />
                                </View>
                                <View style={{ flex: 1 }}>
                                    <ThemedText type="smallBold">{item.title}</ThemedText>
                                    <ThemedText type="small" style={{ color: theme.textSecondary, marginTop: 2 }}>
                                        {item.detail}
                                    </ThemedText>
                                </View>
                            </View>
                            <ThemedText type="small" style={{ color: theme.textSecondary }}>{item.time}</ThemedText>
                        </View>
                    ))}
                </View>
            </View>
        </Container>
    );
}