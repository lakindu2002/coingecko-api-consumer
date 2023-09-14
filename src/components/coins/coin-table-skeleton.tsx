import { TableRow, TableCell, Skeleton } from "@mui/material";
import { FC } from "react";

interface CoinTableSkeletonProps {}

export const CoinTableSkeleton: FC<CoinTableSkeletonProps> = () => (
  <>
    <TableRow>
      <TableCell>
        <Skeleton variant="text" />
      </TableCell>
      <TableCell>
        <Skeleton variant="text" />
      </TableCell>
      <TableCell>
        <Skeleton variant="text" />
      </TableCell>
      <TableCell>
        <Skeleton variant="text" />
      </TableCell>
      <TableCell>
        <Skeleton variant="text" />
      </TableCell>
    </TableRow>
  </>
);
