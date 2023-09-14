import { Container, Box } from "@mui/material";
import { FC } from "react";
import { Logo } from "./logo";
import { Navbar } from "./navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Container maxWidth="md">
        <Box
          sx={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              my: 2,
              width: "100%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Navbar />
            <Logo />
          </Box>
          {children}
        </Box>
      </Container>
    </>
  );
};
