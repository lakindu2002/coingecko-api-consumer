import { ChangeEvent, KeyboardEvent, FC, useEffect, useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { useCoins } from "coingecko/hooks/use-coins";
import { Search } from "coingecko/components/common/search";
import { CoinTable } from "coingecko/components/coins/coin-table";
import { Paginator } from "coingecko/components/common/paginator";
import { CoinType } from "coingecko/types/coin";
import { ErrorView } from "coingecko/components/common/error-view";
import { Close } from "@mui/icons-material";

interface CoinManagementProps {
  mode: CoinType;
}

export const CoinManagement: FC<CoinManagementProps> = ({ mode }) => {
  const [searchKey, setSearchKey] = useState<string>("");
  const {
    changePageNumber,
    coins,
    errorInformation,
    getCoinsPerPage,
    loading,
    pageNumber,
    isSearched,
    searchForCoinsByNameOrSymbol,
  } = useCoins(mode);

  useEffect(() => {
    changePageNumber(1);
  }, [mode]);

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

  const handleClearSearch = () => {
    setSearchKey("");
    if (pageNumber !== 1) {
      changePageNumber(1);
    } else {
      getCoinsPerPage();
    }
  };

  return (
    <>
      {errorInformation && (
        <Box sx={{ my: 2 }}>
          <ErrorView message={errorInformation.message} />
        </Box>
      )}

      <Box sx={{ width: "100%" }}>
        <Search
          label="Search for Coins"
          value={searchKey}
          onKeyDown={handleSearchKeyDown}
          onChange={handleSearchKeyChanged}
          {...(isSearched && {
            InputProps: {
              endAdornment: (
                <IconButton onClick={() => handleClearSearch()}>
                  <Close />
                </IconButton>
              ),
            },
          })}
        />
        <Typography variant="overline" align="left">
          Hint: Enter the coin name or symbol and press enter to filter
        </Typography>
      </Box>
      <Box sx={{ my: 2, width: "100%" }}>
        <CoinTable coins={coins} loading={loading} />
        {!isSearched && (
          <Box sx={{ my: 2 }}>
            <Paginator
              pageNumber={pageNumber}
              onNextPage={() => changePageNumber("next")}
              onPreviousPage={() => changePageNumber("previous")}
            />
          </Box>
        )}
      </Box>
    </>
  );
};
