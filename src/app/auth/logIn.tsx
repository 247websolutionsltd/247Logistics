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

export default function LogIn(){
    const styles = useStyles();
    const theme = useTheme();
    const {logInForm, updateLogInField} = useAuth();
    return(
        <Container edges={['bottom']} style={{justifyContent:'space-between'}}>
            <View/>
            <View style={{padding:Spacing.three}}>
                <View style={{paddingVertical:Spacing.two}}>
                    <ThemedText type="large">Welcome Back</ThemedText>
                    <ThemedText>Fill in your email and password to continue</ThemedText>
                </View>
                <View style={{paddingVertical:Spacing.two}}>
                    <Input label="Email" placeholder="you@example.com" onChangeText={(text)=>updateLogInField("email", text)}/>
                    <Input label="Password" placeholder="yourPa$$w0rd" password onChangeText={(text)=>updateLogInField("password", text)}/>
                    <TouchableOpacity onPress={()=>router.push('/auth/forgot')}>
                        <ThemedText style={{textAlign:'right', color:Colors.primary}} type="small">Forgot password?</ThemedText>
                    </TouchableOpacity>
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
                    <TouchableOpacity style={{marginVertical:Spacing.two}} onPress={()=>router.push('/auth/register')}>
                        <ThemedText style={{fontWeight:500, color:Colors.primary}}>
                            Sign up
                        </ThemedText>
                    </TouchableOpacity>
                </View>
            </View>
        </Container>
    )
}