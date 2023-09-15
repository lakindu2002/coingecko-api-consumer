import { render, screen } from "@testing-library/react";
import { GlobalCard } from "coingecko/components/global/global-card";

describe("global-card", () => {
  it("should render a global card correctly", () => {
    render(<GlobalCard title="active_cryptocurrencies" value={100} />);

    const header = screen.getByText("Total Coins Tracked");
    const value = screen.getByText(100);

    expect(header).toBeInTheDocument();
    expect(value).toBeInTheDocument();
  });

  it("should render title as unknown when unknown key is given", () => {
    render(
      <GlobalCard title={"active_cryptocurrenciessss" as any} value={100} />
    );

    const header = screen.getByText("Unknown");
    const value = screen.getByText(100);

    expect(header).toBeInTheDocument();
    expect(value).toBeInTheDocument();
  });
});
