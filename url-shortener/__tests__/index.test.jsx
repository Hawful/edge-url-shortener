import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("On load renders a form with an input", () => {
    render(<Home />);

    const form = screen.getByRole("form");

    expect(form).toBeInTheDocument();
  });
});
