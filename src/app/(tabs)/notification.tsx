import Container from "@/components/custom-container";
import NotificationCard from "@/components/notification";
import { ThemedText } from "@/components/themed-text";
import { Spacing } from "@/constants/theme";
import notifications from "@/data/notifications";
import { useTheme } from "@/hooks/use-theme";
import { useStyles } from "@/styles/styles";
import { FlatList, View } from "react-native";

export default function Notification(){
    const styles = useStyles();
    const theme = useTheme();
    return(
        <Container>
            <ThemedText style={{padding:Spacing.three, paddingBottom:0}} type="large">Notification</ThemedText>
            <View></View>
            <FlatList
                data={notifications}
                scrollEnabled={false}
                renderItem={({item, index}) => (
                    <NotificationCard
                        icon={item.icon}
                        title={item.title}
                        desc={item.desc}
                        end={index===notifications.length-1}
                    />
                )}
                contentContainerStyle={{paddingHorizontal:Spacing.three}}
                keyExtractor={(item, index) => index.toString()}
            />
        </Container>
    )
}