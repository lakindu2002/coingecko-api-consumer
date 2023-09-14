import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { FC } from "react";

interface PaginatorProps {
  pageNumber: number;
  onNextPage: () => void;
  onPreviousPage: () => void;
}

export const Paginator: FC<PaginatorProps> = ({
  pageNumber,
  onNextPage,
  onPreviousPage,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 1.5,
      }}
    >
      <Button
        disabled={pageNumber <= 1}
        onClick={onPreviousPage}
        startIcon={<KeyboardArrowLeft />}
        variant="outlined"
      >
        Previous
      </Button>

      <Typography variant="body1" fontWeight={600}>
        Page: {pageNumber}
      </Typography>
      <Button
        onClick={onNextPage}
        startIcon={<KeyboardArrowRight />}
        variant="outlined"
      >
        Next
      </Button>
    </Box>
  );
};
