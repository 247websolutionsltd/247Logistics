import { Radius, Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { MaterialIcons } from "@expo/vector-icons";
import { Dimensions, ImageBackground, StyleSheet, View } from "react-native";
import { ThemedText } from "./themed-text";

const { width, height } = Dimensions.get("window");

const OnboardingItem = ({ item }: any) => {
  const theme = useTheme();
  return (
    <View style={[styles.container, { width, backgroundColor: theme.paper }]}>
      <ImageBackground source={item.image} imageStyle={styles.image} style={[styles.imageCard, { height: Math.min(height * 0.53, 440) }]}>
        <View style={styles.imageShade} />
        <View style={styles.imageTopRow}>
          <View style={[styles.brandMark, { backgroundColor: theme.accentSurface }]}>
            <MaterialIcons name="local-shipping" size={18} color={theme.accentText} />
          </View>
          <ThemedText type="smallBold" style={styles.imageCounter}>{item.id} / 3</ThemedText>
        </View>
        <View style={styles.imageBottom}>
          <View style={[styles.eyebrow, { backgroundColor: theme.accentSurface }]}>
            <MaterialIcons name={item.icon} size={14} color={theme.accentText} />
            <ThemedText type="smallBold" style={{ color: theme.accentText, marginLeft: Spacing.one }}>{item.eyebrow}</ThemedText>
          </View>
        </View>
      </ImageBackground>

      <View style={styles.copy}>
        <ThemedText type="large" style={styles.title}>{item.title}</ThemedText>
        <ThemedText style={[styles.desc, { color: theme.textSecondary }]}>{item.description}</ThemedText>
      </View>
    </View>
  );
};

export default OnboardingItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Spacing.three,
    paddingTop: Spacing.five,
  },
  imageCard: {
    overflow: "hidden",
    borderRadius: Radius.lg,
    justifyContent: "space-between",
  },
  image: {
    borderRadius: Radius.lg,
  },
  imageShade: {
    ...StyleSheet.absoluteFill,
    backgroundColor: "rgba(10, 20, 14, 0.2)",
  },
  imageTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: Spacing.three,
  },
  brandMark: {
    width: 38,
    height: 38,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  imageCounter: {
    color: "#FFFFFF",
    backgroundColor: "rgba(10, 20, 14, 0.45)",
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.one,
    borderRadius: Radius.pill,
  },
  imageBottom: {
    padding: Spacing.three,
  },
  eyebrow: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.one,
    borderRadius: Radius.pill,
  },
  copy: {
    paddingHorizontal: Spacing.one,
    paddingTop: Spacing.four,
  },
  desc: {
    marginTop: Spacing.two,
    lineHeight: 23,
  },
  title: {
    lineHeight: 34,
  }
});