import { useCallback, useState } from "react";
import axios from "axios";
import { Coin, CoinMarket, CoinType } from "coingecko/types/coin";
import { ErrorInformation } from "coingecko/types/common";

const getCoinType = (type: CoinType) =>
  type === "currencies" ? "market_cap_desc" : "volume_desc";

const getCoinsById = async (ids: string[], type: CoinType) => {
  const url = `api/v3/coins/markets`;
  const coinResp = await axios.get<CoinMarket[]>(url, {
    params: {
      vs_currency: "usd",
      ids: ids.join(","),
      order: getCoinType(type),
      locale: "en",
      per_page: ids.length,
      page: 1,
    },
  });
  return coinResp.data;
};

export const useCoins = (coinType: CoinType) => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [coins, setCoins] = useState<CoinMarket[]>([]);
  const [errorInformation, setErrorInformation] = useState<
    ErrorInformation | undefined
  >(undefined);
  const [isSearched, setIsSearched] = useState<boolean>(false);

  const searchForCoinsByNameOrSymbol = async (searchString: string) => {
    const formattedSearchString = searchString.trim().toLowerCase();
    if (formattedSearchString.length === 0) {
      return;
    }

    const url = "/api/v3/coins/list";

    try {
      setIsSearched(false);
      setLoading(true);
      setCoins([]);
      setErrorInformation(undefined);
      const coinListResponse = await axios.get<Coin[]>(url);
      const coins = coinListResponse.data;

      const searchableCoins = coins
        .filter(
          (coin) =>
            coin.name.trim().toLowerCase().includes(formattedSearchString) ||
            coin.symbol.toLowerCase().trim().includes(formattedSearchString)
        )
        .map((coin) => coin.id);

      const results = await getCoinsById(searchableCoins, coinType);
      setCoins(results);
      setIsSearched(true);
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

  const getCoinsPerPage = useCallback(async () => {
    const url = `/api/v3/coins/markets`;
    try {
      setCoins([]);
      setIsSearched(false);
      setErrorInformation(undefined);
      setLoading(true);
      const resp = await axios.get<CoinMarket[]>(url, {
        params: {
          vs_currency: "usd",
          order: getCoinType(coinType),
          per_page: 20,
          page: pageNumber,
          sparkline: false,
          locale: "en",
        },
      });
      if (resp.status !== 200) {
        throw new Error("Request failed");
      }
      setCoins(resp.data);
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
  }, [coinType, pageNumber]);

  const changePageNumber = (operation: "next" | "previous" | number) => {
    if (operation === "next") {
      setPageNumber((prev) => prev + 1);
    } else if (operation === "previous") {
      setPageNumber((prev) => prev - 1);
    } else {
      setPageNumber(operation);
    }
  };

  return {
    changePageNumber,
    coins,
    loading,
    pageNumber,
    getCoinsPerPage,
    errorInformation,
    searchForCoinsByNameOrSymbol,
    isSearched,
  };
};
