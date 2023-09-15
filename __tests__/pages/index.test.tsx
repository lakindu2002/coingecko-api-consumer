import React from "react";
import { render, screen } from "@testing-library/react";
import HomePage from "coingecko/pages";

jest.mock("next/head", () => {
  return {
    __esModule: true,
    default: ({ children }: { children: React.ReactNode }) => {
      return <div data-testid="head">{children}</div>;
    },
  };
});

jest.mock("../../src/components/common/layout.tsx", () => {
  return {
    __esModule: true,
    Layout: ({ children }: { children: React.ReactNode }) => {
      return <div data-testid="layout">{children}</div>;
    },
  };
});

jest.mock("../../src/components/coins/coin-management.tsx", () => {
  return {
    __esModule: true,
    CoinManagement: ({ mode }: { mode: string }) => {
      return <div data-testid="coin-management">{mode}</div>;
    },
  };
});

describe("index - home page", () => {
  it("renders the title, layout, and coin-management components", () => {
    render(<HomePage />);

    const titleElement = screen.getByText("Coins | Coingecko Client");
    expect(titleElement).toBeInTheDocument();

    const layoutElement = screen.getByTestId("layout");
    expect(layoutElement).toBeInTheDocument();

    const coinManagementElement = screen.getByTestId("coin-management");
    expect(coinManagementElement).toBeInTheDocument();
  });
});
