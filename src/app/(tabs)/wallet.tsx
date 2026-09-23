import Container from "@/components/custom-container";
import { ThemedText } from "@/components/themed-text";
import TopUp from "@/components/topUp";
import Transaction from "@/components/transaction";
import { Colors, Spacing } from "@/constants/theme";
import transactions from "@/data/transaction";
import { useTheme } from "@/hooks/use-theme";
import { useStyles } from "@/styles/styles";
import { MaterialIcons } from "@expo/vector-icons";
import { FlatList, TouchableOpacity, View } from "react-native";

const walletSummary = [
    { label: "This month", value: "$4,180", icon: "trending-up" },
    { label: "Outgoing", value: "$1,340", icon: "arrow-outward" },
    { label: "Pending", value: "$520", icon: "hourglass-top" },
];

const filters = ["All", "Income", "Expense"];

export default function Wallet() {
    const styles = useStyles();
    const theme = useTheme();

    return (
        <Container edges={["top"]}>
            <View style={{ padding: Spacing.three }}>
                <View style={[styles.rowStretch, { marginBottom: Spacing.two }]}>
                    <ThemedText type="large">Wallet</ThemedText>
                    <TouchableOpacity>
                        <ThemedText type="small" style={{ color: theme.accentText }}>History</ThemedText>
                    </TouchableOpacity>
                </View>

                <View
                    style={{
                        backgroundColor: Colors.primaryDark,
                        borderRadius: 24,
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
                                width: 44,
                                height: 44,
                                borderRadius: 14,
                                backgroundColor: "rgba(120, 160, 131, 0.24)",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <MaterialIcons name="account-balance-wallet" size={20} color="#FFF" />
                        </View>
                    </View>

                    <View style={[styles.rowStretch, { marginTop: Spacing.three, alignItems: "stretch" }]}>
                        {walletSummary.map((item) => (
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
                                <MaterialIcons name={item.icon as any} size={18} color="#dfeee1" />
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

            <View style={{ paddingHorizontal: Spacing.three, marginTop: Spacing.two }}>
                <ThemedText type="bold" style={{ marginBottom: Spacing.two }}>Fund wallet</ThemedText>
                <TopUp />
            </View>

            <View style={{ paddingHorizontal: Spacing.three, marginTop: Spacing.three }}>
                <View style={[styles.rowStretch, { marginBottom: Spacing.two }]}>
                    <ThemedText type="bold">Overview</ThemedText>
                    <TouchableOpacity>
                        <ThemedText type="small" style={{ color: theme.accentText }}>This month</ThemedText>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: "row", gap: Spacing.two }}>
                    {filters.map((item, index) => (
                        <TouchableOpacity
                            key={item}
                            style={{
                                paddingHorizontal: Spacing.two,
                                paddingVertical: Spacing.one,
                                borderRadius: 999,
                                backgroundColor: index === 0 ? Colors.primary : theme.accentSurface,
                            }}
                        >
                            <ThemedText
                                type="small"
                                style={{
                                    color: index === 0 ? "#FFF" : theme.accentText,
                                }}
                            >
                                {item}
                            </ThemedText>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            <View style={{ paddingHorizontal: Spacing.three, marginTop: Spacing.three, paddingBottom: Spacing.three }}>
                <View style={[styles.rowStretch, { marginBottom: Spacing.two }]}>
                    <ThemedText type="bold">Transaction history</ThemedText>
                    <TouchableOpacity>
                        <ThemedText type="small" style={{ color: theme.accentText }}>Export</ThemedText>
                    </TouchableOpacity>
                </View>

                <FlatList
                    data={transactions}
                    scrollEnabled={false}
                    contentContainerStyle={{ paddingBottom: Spacing.three }}
                    renderItem={({ item, index }) => (
                        <View
                            style={{
                                backgroundColor: theme.background,
                                borderRadius: 14,
                                borderWidth: 1,
                                borderColor: theme.line,
                                marginBottom: index === transactions.length - 1 ? 0 : Spacing.two,
                            }}
                        >
                            <Transaction title={item.title} date={item.date} price={item.price} />
                        </View>
                    )}
                    keyExtractor={(item, index) => `${item.title}-${index}`}
                />
            </View>
        </Container>
    );
}