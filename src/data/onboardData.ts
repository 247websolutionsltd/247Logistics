import { Colors } from "@/constants/theme";

export const onboardingData = [
  {
    id: "1",
    title: "Every delivery, clearly tracked",
    description: "See active routes, delivery progress, and arrival times in one calm, reliable dashboard.",
    image: require("../../assets/images/onboard1.jpg"),
    icon: "route",
    eyebrow: "TRACK EVERY ROUTE",
    pageColor: Colors.primary
  },
  {
    id: "2",
    title: "Send packages without the guesswork",
    description: "Create a pickup in a few steps, choose the right service, and get a clear quote before you confirm.",
    image: require("../../assets/images/onboard2.jpg"),
    icon: "local-shipping",
    eyebrow: "BOOK IN MINUTES",
    pageColor: Colors.primary
  },
  {
    id: "3",
    title: "A better handoff from pickup to delivery",
    description: "Stay connected with timely updates and support while your package moves through every step.",
    image: require("../../assets/images/onboard3.jpg"),
    icon: "support-agent",
    eyebrow: "DELIVERY SUPPORT",
    pageColor: Colors.primary
  },
];