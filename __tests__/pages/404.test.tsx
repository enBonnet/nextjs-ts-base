/**
 * @jest-environment jsdom
 */

import { render, RenderResult } from "@testing-library/react";
import FourOhFour from "../../pages/404";

let documentBody: RenderResult;
describe("render FourOhFour", () => {
  beforeEach(() => {
    documentBody = render(<FourOhFour />);
  });
  it("shows not found message", () => {
    expect(documentBody.getByText("404 - Page Not Found")).toBeInTheDocument();
    expect(documentBody.getByText("Go back home")).toBeInTheDocument();
  });
});
