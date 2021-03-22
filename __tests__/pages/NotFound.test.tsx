import { render, RenderResult } from "@testing-library/react";
import NotFound from "../../pages/NotFound";

let documentBody: RenderResult;
describe("render NotFound", () => {
  beforeEach(() => {
    documentBody = render(<NotFound />);
  });
  it("shows not found message", () => {
    expect(documentBody.getByText("Page Not Found")).toBeInTheDocument();
    expect(documentBody.getByText("404")).toBeInTheDocument();
  });
});
