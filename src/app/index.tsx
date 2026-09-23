import { ThemedText } from '@/components/themed-text';
import { Colors, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { useEffect } from 'react';
import { Pressable, View } from 'react-native';

export default function HomeScreen() {
  const theme = useTheme();

  useEffect(() => {
    let isMounted = true;

    const checkOnboardingStatus = async () => {
      try {
        const hasCompletedOnboarding = await AsyncStorage.getItem('onboarded');

        if (isMounted) {
          router.replace(hasCompletedOnboarding === 'true' ? '/auth/logIn' : '/onboard');
        }
      } catch (error) {
        console.error('Unable to read onboarding status', error);
        if (isMounted) {
          router.replace('/onboard');
        }
      }
    };

    checkOnboardingStatus();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: theme.paper, padding: Spacing.three, justifyContent: 'center' }}>
      <View style={{ backgroundColor: Colors.primaryDark, borderRadius: 28, padding: Spacing.four, alignItems: 'center' }}>
        <View style={{ width: 72, height: 72, borderRadius: 20, backgroundColor: 'rgba(120,160,131,0.2)', alignItems: 'center', justifyContent: 'center' }}>
          <MaterialIcons name="local-shipping" size={32} color="#FFF" />
        </View>

        <ThemedText type="title" style={{ color: '#FFF', marginTop: Spacing.three, textAlign: 'center' }}>
          24/7 Logistics
        </ThemedText>
        <ThemedText type="small" style={{ color: '#dfeee1', marginTop: Spacing.one, textAlign: 'center' }}>
          Smarter dispatch, faster delivery, and clearer tracking for every route.
        </ThemedText>

        <Pressable
          onPress={() => router.replace('/(tabs)/home')}
          style={{
            marginTop: Spacing.four,
            width: '100%',
            backgroundColor: Colors.primary,
            borderRadius: 16,
            paddingVertical: Spacing.three,
            alignItems: 'center',
          }}
        >
          <ThemedText type="bold" style={{ color: '#FFF' }}>Go to dashboard</ThemedText>
        </Pressable>
      </View>
    </View>
  );
}
