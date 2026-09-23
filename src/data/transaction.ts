export type WalletTransaction = {
    id: string;
    title: string;
    date: string;
    price: string;
};

const transactions: WalletTransaction[] = [
    {
        id:"LT-0421",
        title:"Delivery Fee",
        date:"July 7, 2022",
        price:"3,000"
    },
    {
        id:"LT-0204",
        title:"Delivery Fee",
        date:"July 7, 2022",
        price:"2,000"
    },
    {
        id:"LT-0118",
        title:"Top Up",
        date:"July 28, 2022",
        price:"10,000"
    },
    {
        id:"LT-0421-2",
        title:"Delivery Fee",
        date:"July 7, 2022",
        price:"3,000"
    }
]

export default transactions