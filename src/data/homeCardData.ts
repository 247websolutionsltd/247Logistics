import { MaterialIcons } from "@expo/vector-icons";
import { ComponentProps } from "react";

type HomeCardProps = {
    icon: ComponentProps<typeof MaterialIcons>['name'];
    title: string;
    desc: string;
}

const homeCardData:HomeCardProps[] = [
    {
        icon:"headset-mic",
        title:"Customer Care",
        desc:"Our customer care service line is available from 8 -9pm week days and 9 - 5 weekends - tap to call us today"
    },
    {
        icon:"inventory",
        title:"Send a package",
        desc:"Request for a driver to pick up or deliver your package for you"
    },
    {
        icon:"account-balance-wallet",
        title:"Fund your wallet",
        desc:"To fund your wallet is as easy as ABC, make use of our fast technology and top-up your wallet today"
    },
    {
        icon:"directions-car",
        title:"Book a Rider",
        desc:"Search for available driver within your area"
    },
    {
        icon:"badge",
        title:"Enroll as a Rider",
        desc:"A chance for you to earn as you become one of our delivery agents, enroll and get the necessary trainings from our crew to get started."
    },
    {
        icon:"people",
        title:"Refer and earn",
        desc:"Refer a friend to our platform and stand the chance of winning lots of goodies plus free delivery"
    },
]

export default homeCardData;