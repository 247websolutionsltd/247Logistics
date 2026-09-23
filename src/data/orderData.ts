export type OrderStatus = "Delivered" | "In transit" | "Picked up" | "Order placed";

export type Order = {
  id: string;
  title: string;
  pickup: string;
  destination: string;
  status: OrderStatus;
  price: string;
  placedAt: string;
  eta: string;
  driver: string;
  driverPhone: string;
  vehicle: string;
};

export const orders: Order[] = [
  {
    id: "LT-0421",
    title: "Mainland Hub delivery",
    pickup: "21 Ring Road, Lekki",
    destination: "4 Falomo Road, Ikoyi",
    status: "Delivered",
    price: "3,000",
    placedAt: "Today, 08:42 AM",
    eta: "Delivered at 11:30 AM",
    driver: "J. Okafor",
    driverPhone: "+234 802 555 0148",
    vehicle: "Toyota Corolla · KSF 482 LA",
  },
  {
    id: "LT-0204",
    title: "Lagos Port route",
    pickup: "Lagos Port, Apapa",
    destination: "Ikeja Depot",
    status: "In transit",
    price: "5,400",
    placedAt: "Today, 10:18 AM",
    eta: "12 mins away",
    driver: "A. Bello",
    driverPhone: "+234 803 555 0192",
    vehicle: "Honda Bike · KJA 291 AB",
  },
  {
    id: "LT-0118",
    title: "Lekki Phase 1 delivery",
    pickup: "Yaba",
    destination: "Lekki Phase 1",
    status: "Picked up",
    price: "2,000",
    placedAt: "Yesterday, 09:15 AM",
    eta: "28 mins away",
    driver: "M. Adeyemi",
    driverPhone: "+234 805 555 0121",
    vehicle: "Suzuki Carry · LSR 772 XY",
  },
];

export const getOrder = (id?: string) => orders.find((order) => order.id === id) ?? orders[0];