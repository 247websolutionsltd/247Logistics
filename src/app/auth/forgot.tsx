import Button from "@/components/button";
import Container from "@/components/custom-container";
import Input from "@/components/custom-input";
import { ThemedText } from "@/components/themed-text";
import { Colors, Spacing } from "@/constants/theme";
import { useAuth } from "@/context/PageContext";
import { useTheme } from "@/hooks/use-theme";
import { useStyles } from "@/styles/styles";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { TouchableOpacity, View } from "react-native";

export default function Forgot(){
    const styles = useStyles();
    const theme = useTheme();
    const {logInForm, updateLogInField} = useAuth();
    return(
        <Container edges={['top', 'bottom']} style={{justifyContent:'space-between'}}>
            <TouchableOpacity style={{paddingHorizontal:Spacing.two}} onPress={()=>router.back()}>
                <MaterialIcons name="chevron-left" size={35}/>
            </TouchableOpacity>
            <View>
                <View style={{padding:Spacing.three}}>
                    <View style={{paddingVertical:Spacing.two}}>
                        <ThemedText type="large">Forgot Password</ThemedText>
                        <ThemedText>Enter your email address</ThemedText>
                    </View>
                    <View style={{paddingVertical:Spacing.two}}>
                        <Input label="Email" placeholder="you@example.com" onChangeText={(text)=>updateLogInField("email", text)}/>
                    </View>
                </View>

                <View style={{marginTop:Spacing.five}}>
                    <Button onPress={()=>router.push('/auth/otp')} title="Send OTP" style={{marginHorizontal:Spacing.three}}/>
                    <View style={[styles.row, {justifyContent:'center'}]}>
                        <ThemedText>
                            Remember password? Back to{" "}
                        </ThemedText>
                        <TouchableOpacity style={{marginVertical:Spacing.two}} onPress={()=>router.push('/auth/register')}>
                            <ThemedText style={{fontWeight:500, color:Colors.primary}}>
                                Sign in
                            </ThemedText>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View/>
        </Container>
    )
}
