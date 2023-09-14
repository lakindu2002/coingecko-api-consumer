import { FC } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  CircularProgress,
  Box,
  Skeleton,
  Alert,
} from "@mui/material";
import { CoinMarket } from "coingecko/types/coin";
import { CoinTableSkeleton } from "./coin-table-skeleton";

interface CoinTableProps {
  coins: CoinMarket[];
  loading?: boolean;
}

export const CoinTable: FC<CoinTableProps> = (props) => {
  const { coins, loading = false } = props;

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Symbol</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Market Cap</TableCell>
            <TableCell>Change (24h)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {loading && (
            <>
              <CoinTableSkeleton />
              <CoinTableSkeleton />
              <CoinTableSkeleton />
              <CoinTableSkeleton />
            </>
          )}
          {coins.map((coin) => (
            <TableRow key={coin.id}>
              <TableCell sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Avatar variant="rounded" src={coin.image}></Avatar>
                {coin.name}
              </TableCell>
              <TableCell>{coin.symbol.toUpperCase()}</TableCell>
              <TableCell>${coin.current_price.toFixed(2)}</TableCell>
              <TableCell>${coin.market_cap.toLocaleString()}</TableCell>
              <TableCell
                sx={{
                  color: (theme) =>
                    (coin.price_change_percentage_24h || 0) > 0
                      ? theme.palette.success.main
                      : theme.palette.error.main,
                }}
              >
                {(coin.price_change_percentage_24h || 0).toFixed(2)}%
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};