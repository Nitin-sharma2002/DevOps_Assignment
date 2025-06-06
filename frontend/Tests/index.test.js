import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

test("renders loading message", () => {
  render(<Home />);
  expect(screen.getByText(/loading/i)).toBeInTheDocument();
});
