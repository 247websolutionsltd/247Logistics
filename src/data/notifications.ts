import { MaterialIcons } from "@expo/vector-icons";
import { ComponentProps } from "react";

interface NotificationProps{
    icon: ComponentProps<typeof MaterialIcons>['name'];
    title: string;
    desc: string;
}

const notifications:NotificationProps[] = [
    {
        title: '30% Special Discount!',
        desc: 'Special promotion only valid today.',
        icon: 'label-outline'
    },
    {
        title: 'Top Up E-wallet Successfully!',
        desc: 'You have top up your e-wallet.',
        icon: 'account-balance-wallet'
    },
    {
        title: 'New Service Available!',
        desc: 'Now you can track order in real-time.',
        icon: 'location-on'
    },
    {
        title: 'Credit Card Connected!',
        desc: 'Credit card has been linked.',
        icon: 'credit-card'
    },
    {
        title: 'Account Setup Successfully!',
        desc: 'Your account has been created.',
        icon: 'account-circle'
    },
]

export default notifications