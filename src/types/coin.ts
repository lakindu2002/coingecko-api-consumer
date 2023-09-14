export interface Coin {
  id: string;
  name: string;
  symbol: string;
}

export interface CoinMarket extends Coin {
  image: string;
  current_price: number;
  last_updated: number;
  market_cap: number;
  market_cap_change_percentage_24h?: number;
  price_change_percentage_24h?: number;
}
