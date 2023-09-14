import { FC } from "react";
import { Alert } from "@mui/material";

interface ErrorViewProps {
  message: string;
}

export const ErrorView: FC<ErrorViewProps> = ({ message }) => (
  <Alert
    severity="error"
    sx={{
      fontWeight: 500,
    }}
  >
    {message}
  </Alert>
);
