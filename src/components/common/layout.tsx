import { Container, Box } from "@mui/material";
import { FC } from "react";
import { Logo } from "./logo";

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
          <Box sx={{ my: 2 }}>
            <Logo />
          </Box>
          {children}
        </Box>
      </Container>
    </>
  );
};
