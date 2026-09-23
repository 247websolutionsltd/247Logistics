import { Colors, Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { useStyles } from "@/styles/styles";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, TouchableOpacity, View } from "react-native";
import { ThemedText } from "./themed-text";

export default function Profiles(){
    const styles = useStyles();
    const theme = useTheme();
    const [ notification, setNotification ] = useState(true);
    const backgroundColor = notification?Colors.primary:"#797979";
    const alignItems = notification?"flex-end":"flex-start"
    return(
        <View style={styles.profile}>
    
            <TouchableOpacity style={styles.profileInd} >
                <MaterialIcons name="person-outline" size={23} color={theme.text}/>
                <View style={{flex:1, marginLeft:Spacing.two}}>
                    <ThemedText>Edit Profile</ThemedText>
                    <ThemedText style={{fontSize:13}}>Edit your profile</ThemedText>
                </View>
                <MaterialIcons name="chevron-right" size={20}/>
            </TouchableOpacity>

            <View style={styles.profileInd}>
                <MaterialIcons name="notifications-none" size={23} color={theme.text}/>
                <View style={{flex:1, marginLeft:Spacing.two}}>
                    <ThemedText>Push Notifications</ThemedText>
                    <ThemedText style={{fontSize:13}}>Listing Updates</ThemedText>
                </View>
                <Pressable onPress={()=>setNotification(!notification)} style={{padding:Spacing.three}}>
                    <View style={[styles.radio, {backgroundColor, alignItems}]}>
                        <View style={styles.radioCircle}/>
                    </View>
                </Pressable>
            </View>
            
            <TouchableOpacity style={styles.profileInd} >
                <MaterialIcons name="person-outline" size={23} color={theme.text}/>
                <View style={{flex:1, marginLeft:Spacing.two}}>
                    <ThemedText>Language</ThemedText>
                    <ThemedText style={{fontSize:13}}>Change your language</ThemedText>
                </View>
                <MaterialIcons name="chevron-right" size={20}/>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.profileInd, {borderBottomWidth:0}]}>
                <MaterialIcons name="person-outline" size={23} color={theme.text}/>
                <View style={{flex:1, marginLeft:Spacing.two}}>
                    <ThemedText>Help & support</ThemedText>
                    <ThemedText style={{fontSize:13}}></ThemedText>
                </View>
                <MaterialIcons name="chevron-right" size={20}/>
            </TouchableOpacity>

        </View>
    )
}