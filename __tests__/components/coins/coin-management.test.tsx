import { fireEvent, render } from "@testing-library/react";
import { CoinManagement } from "coingecko/components/coins/coin-management";

jest.mock("../../../src/hooks/use-coins.ts", () => ({
  useCoins: () => ({
    changePageNumber: jest.fn(),
    coins: [
      {
        id: "bitcoin",
        symbol: "btc",
        name: "Bitcoin",
        image:
          "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
        current_price: 26345,
        market_cap: 513635270846,
        market_cap_rank: 1,
        price_change_percentage_24h: -1.12717,
        market_cap_change_percentage_24h: -1.11094,
        last_updated: Date.now(),
        total_volume: 0,
      },
    ],
    errorInformation: null,
    getCoinsPerPage: jest.fn(),
    loading: false,
    pageNumber: 1,
    isSearched: false,
    searchForCoinsByNameOrSymbol: jest.fn(),
  }),
}));

describe("coin-management tests", () => {
  it("renders without crashing", () => {
    const { container } = render(<CoinManagement mode="currencies" />);
    expect(container).toBeInTheDocument();
  });

  it("handles search input change", () => {
    const { getByLabelText } = render(<CoinManagement mode="currencies" />);
    const input = getByLabelText("Search for Coins") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "bitcoin" } });
    expect(input.value).toBe("bitcoin");
  });

  it("renders table items correctly", () => {
    const { getByText } = render(<CoinManagement mode="currencies" />);
    const bitcoin = getByText("Bitcoin");

    expect(bitcoin).toBeInTheDocument();
  });
});
