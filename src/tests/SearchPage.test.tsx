import { render, screen } from "@testing-library/react";
import { mockAllIsIntersecting } from "react-intersection-observer/test-utils";
import { SearchPage } from "../pages/SearchPage";

describe("Search Page", () => {
  test("renders search page", () => {
    render(<SearchPage />);
    mockAllIsIntersecting(true);
    const componentNode = screen.getByText(/Open Filters/);
    expect(componentNode).toBeInTheDocument();
    expect(componentNode).toBeVisible();
  });
});
