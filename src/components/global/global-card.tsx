import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { useGlobal } from "coingecko/hooks/use-global";
import { GlobalMarket } from "coingecko/types/global";
import { FC } from "react";

interface GlobalCardProps {
  title: keyof GlobalMarket;
  value: string | number;
}

export const GlobalCard: FC<GlobalCardProps> = ({ title, value }) => {
  const { getGlobalMarketKeyNames } = useGlobal();
  return (
    <Card sx={{ minWidth: 300 }}>
      <CardHeader
        sx={{ color: (theme) => theme.palette.primary.main }}
        title={
          <Typography variant="h6">{getGlobalMarketKeyNames(title)}</Typography>
        }
      ></CardHeader>
      <CardContent sx={{ py: 0 }}>
        <Typography fontSize={28}>{value}</Typography>
      </CardContent>
    </Card>
  );
};
