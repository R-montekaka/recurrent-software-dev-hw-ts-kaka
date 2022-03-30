import { render, screen } from "@testing-library/react";
import fetchMock from "jest-fetch-mock";
import Home from "@/pages/index";

describe("Home", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("renders a heading", async () => {
    fetchMock.mockResponseOnce(JSON.stringify([]));

    render(<Home />);

    const heading = await screen.findByRole("heading", {
      name: /Vehicle Inventory/i,
    });

    expect(heading).toBeInTheDocument();
  });
  it("renders vehicle vins", async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify([{ vin: "ABC" }, { vin: "DEF" }])
    );

    render(<Home />);

    const vin1 = await screen.findByText("ABC");

    expect(vin1).toBeInTheDocument();
  });
});
