import { render, screen } from "@testing-library/react";
import { mockAllIsIntersecting } from "react-intersection-observer/test-utils";
import { LandingPage } from "../pages/LandingPage";

describe("Landing Page", () => {
  test("renders landing page", () => {
    render(<LandingPage />);
    mockAllIsIntersecting(true);
    const componentNode = screen.getByText(/Welcome to the wonderful world/);
    expect(componentNode).toBeInTheDocument();
    expect(componentNode).toBeVisible();
  });
});
