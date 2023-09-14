import { useCoins } from "coingecko/hooks/use-coins";
import { ChangeEvent, KeyboardEvent, FC, useEffect, useState } from "react";
import { Search } from "coingecko/components/common/search";
import { CoinTable } from "./coin-table";
import { Alert, Box, Typography } from "@mui/material";
import { Paginator } from "coingecko/components/common/paginator";

interface CoinManagementProps {}

export const CoinManagement: FC<CoinManagementProps> = () => {
  const [searchKey, setSearchKey] = useState<string>("");
  const {
    changePageNumber,
    coins,
    errorInformation,
    getCoinsPerPage,
    loading,
    pageNumber,
    searchForCoinsByNameOrSymbol,
  } = useCoins();

  useEffect(() => {
    getCoinsPerPage();
  }, [getCoinsPerPage]);

  const handleSearchKeyChanged = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearchKey(event.target.value);
  };

  const handleSearchKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.code.toLowerCase().includes("enter")) {
      // search
      searchForCoinsByNameOrSymbol(searchKey);
    }
  };

  return (
    <>
      {errorInformation && (
        <Box sx={{ my: 2 }}>
          <Alert
            severity="error"
            sx={{
              fontWeight: 500,
            }}
          >
            {errorInformation.message}
          </Alert>
        </Box>
      )}

      <Box sx={{ width: "100%" }}>
        <Search
          label="Search for Coins"
          value={searchKey}
          onKeyDown={handleSearchKeyDown}
          onChange={handleSearchKeyChanged}
        />
        <Typography variant="overline" align="left">
          Hint: Enter the coin name or symbol and press enter to filter
        </Typography>
      </Box>
      <Box sx={{ my: 2, width: "100%" }}>
        <CoinTable coins={coins} loading={loading} />
        <Box sx={{ my: 2 }}>
          <Paginator
            pageNumber={pageNumber}
            onNextPage={() => changePageNumber("next")}
            onPreviousPage={() => changePageNumber("previous")}
          />
        </Box>
      </Box>
    </>
  );
};
