import axios from "axios";
import { ErrorInformation } from "coingecko/types/common";
import { GlobalMarket } from "coingecko/types/global";
import { useState } from "react";

const keyValues: { [key: string]: string } = {
  active_cryptocurrencies: "Total Coins Tracked",
  upcoming_icos: "Upcoming ICOs",
  ongoing_icos: "Ongoing ICOs",
  ended_icos: "Ended ICOs",
  market_cap_change_percentage_24h_usd: "Market Cap Change (24hr)",
};

export const useGlobal = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [errorInformation, setErrorInformation] = useState<
    ErrorInformation | undefined
  >(undefined);
  const [information, setInformation] = useState<GlobalMarket | undefined>(
    undefined
  );

  const getGlobalMarketInformation = async () => {
    const url = "/api/v3/global";
    try {
      setLoading(true);
      setErrorInformation(undefined);
      setInformation(undefined);
      const resp = await axios.get<{ data: GlobalMarket }>(url);
      setInformation(resp.data.data);
    } catch (err) {
      let message = "";
      if ((err as any)?.response?.status) {
        message =
          "The number of requests per minute have been exceeded. Try again in a bit.";
      } else {
        message = "We ran into an unexpected error. Please try again";
      }
      setErrorInformation({ message });
    } finally {
      setLoading(false);
    }
  };

  const getGlobalMarketKeyNames = (key: keyof GlobalMarket) =>
    keyValues[key] || "Unknown";

  return {
    getGlobalMarketInformation,
    loading,
    errorInformation,
    information,
    getGlobalMarketKeyNames,
  };
};
