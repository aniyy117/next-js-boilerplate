import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home component", () => {
  test('renders "Hello world!" text', () => {
    render(<Home />);
    const helloWorldText = screen.getByText(/Hello world!/i);
    expect(helloWorldText).toBeInTheDocument();
  });
});
