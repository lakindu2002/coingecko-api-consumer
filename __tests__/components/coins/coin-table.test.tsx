import { render } from "@testing-library/react";
import { CoinTable } from "coingecko/components/coins/coin-table";
import { CoinMarket } from "coingecko/types/coin";

const coins: CoinMarket[] = [
  {
    id: "bitcoin",
    symbol: "btc",
    name: "Bitcoin",
    image:
      "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    current_price: 26345,
    market_cap: 513635270846,
    price_change_percentage_24h: -1.12717,
    market_cap_change_percentage_24h: -1.11094,
    last_updated: Date.now(),
    total_volume: 0,
  },
];

describe("coin-table tests", () => {
  it("renders the table header", () => {
    const { getByText } = render(<CoinTable coins={[]} />);
    expect(getByText("Name")).toBeInTheDocument();
    expect(getByText("Symbol")).toBeInTheDocument();
    expect(getByText("Price")).toBeInTheDocument();
    expect(getByText("Total Volume")).toBeInTheDocument();
    expect(getByText("Market Cap")).toBeInTheDocument();
    expect(getByText("Change (24h)")).toBeInTheDocument();
  });

  it("should render a coin table with the row", () => {
    const { getByText } = render(<CoinTable coins={coins} />);

    const element = getByText("Bitcoin");
    expect(element).toBeInTheDocument();
  });

  it("should render a coin table row with the symbol in uppercase", () => {
    const { getByText } = render(<CoinTable coins={coins} />);

    const element = getByText("BTC");
    expect(element).toBeInTheDocument();
  });

  it("should render a coin table row with the marketcap rounded down", () => {
    const { getByText } = render(<CoinTable coins={coins} />);

    const element = getByText("-1.13%");
    expect(element).toBeInTheDocument();
  });

  it("should not render a coin table row when loading", () => {
    const { getByText } = render(<CoinTable coins={coins} loading />);

    const element = getByText("BTC");
    expect(element).toBeInTheDocument();
  });
});
