import { FC } from "react";
import NextImage from "next/image";

interface LogoProps {}

export const Logo: FC<LogoProps> = () => {
  return <NextImage src="/logo.gif" alt="App Logo" width={500} height={250} />;
};
