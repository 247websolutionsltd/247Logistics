import Button from "@/components/button";
import Container from "@/components/custom-container";
import Input from "@/components/custom-input";
import { ThemedText } from "@/components/themed-text";
import { Colors, Spacing } from "@/constants/theme";
import { useAuth } from "@/context/PageContext";
import { useTheme } from "@/hooks/use-theme";
import { useStyles } from "@/styles/styles";
import { router } from "expo-router";
import { Image, TouchableOpacity, View } from "react-native";

export default function Register(){
    const styles = useStyles();
    const theme = useTheme();
    const {registerForm, updateRegisterField} = useAuth();
    return(
        <Container edges={['bottom']} style={{justifyContent:'space-between'}}>
            <View/>
            <View style={{padding:Spacing.three}}>
                <View style={{paddingVertical:Spacing.three}}>
                    <ThemedText type="large">Create an account</ThemedText>
                    <ThemedText>Complete the sign up process to get started</ThemedText>
                </View>
                <View style={{paddingVertical:Spacing.two}}>
                    <Input label="Full Name" placeholder="John Doe" onChangeText={(text)=>updateRegisterField("name", text)}/>
                    <Input label="Phone" placeholder="08012345678" number onChangeText={(text)=>updateRegisterField("phone", text)}/>
                    <Input label="Email" placeholder="you@example.com" onChangeText={(text)=>updateRegisterField("email", text)}/>
                    <Input label="Password" placeholder="yourPa$$w0rd" password onChangeText={(text)=>updateRegisterField("password", text)}/>
                    <Input label="Confirm Password" placeholder="yourPa$$w0rd" password onChangeText={(text)=>updateRegisterField("confirm", text)}/>
                </View>
            </View>

            <View>
                <Button onPress={()=>router.replace("/(tabs)/home")} title="Sign In" style={{marginHorizontal:Spacing.three}}/>
                <View style={styles.row}>
                    <View style={styles.line}/>
                    <ThemedText style={{padding:Spacing.two, color:theme.textSecondary}}>or continue with</ThemedText>
                    <View style={styles.line}/>
                </View>
                <View style={styles.socialRow}>
                    <TouchableOpacity style={styles.socialBtn} >
                        <Image source={require('../../../assets/images/google.png')} style={{width:27, height:27, marginRight:5}}/>
                        <ThemedText >Google</ThemedText>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialBtn}>
                        <Image source={require('../../../assets/images/apple.png')} style={{width:23, height:23, marginRight:5}} resizeMode="contain"/>
                        <ThemedText>Apple</ThemedText>
                    </TouchableOpacity>
                </View>
                <View style={[styles.row, {justifyContent:'center'}]}>
                    <ThemedText>
                        Don't have an account?{" "}
                    </ThemedText>
                    <TouchableOpacity style={{marginVertical:Spacing.two}} onPress={()=>router.push('/auth/logIn')}>
                        <ThemedText style={{fontWeight:500, color:Colors.primary}}>
                            Sign up
                        </ThemedText>
                    </TouchableOpacity>
                </View>
            </View>
        </Container>
    )
}