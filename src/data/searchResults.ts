export type SearchResult = {
  id: string;
  title: string;
  detail: string;
  status: string;
  icon: "local-shipping" | "account-balance-wallet" | "route";
};

const searchResults: SearchResult[] = [
  { id: "LT-0421", title: "Mainland Hub delivery", detail: "4 Falomo Road, Ikoyi", status: "Delivered", icon: "local-shipping" },
  { id: "LT-0204", title: "Lagos Port route", detail: "Ikeja Depot · 12 mins away", status: "In transit", icon: "route" },
  { id: "LT-0118", title: "Lekki Phase 1 delivery", detail: "Yaba to Lekki Phase 1", status: "Picked up", icon: "local-shipping" },
  { id: "WALLET-150", title: "Wallet top-up", detail: "Added to available balance", status: "Completed", icon: "account-balance-wallet" },
];

export default searchResults;