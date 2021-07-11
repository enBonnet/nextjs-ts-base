/**
 * @jest-environment jsdom
 */

import { render, RenderResult } from "@testing-library/react";
import Error from "../../pages/_error";

let documentBody: RenderResult;
describe("render Error", () => {
  beforeEach(() => {
    documentBody = render(<Error />);
  });
  it("shows not found message", () => {
    expect(documentBody.getByText("Error Page")).toBeInTheDocument();
    expect(documentBody.getByText("Go back home")).toBeInTheDocument();
  });
});
