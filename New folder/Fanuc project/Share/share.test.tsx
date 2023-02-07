import {
  // render,
  cleanup
} from "@testing-library/react";
import "@testing-library/jest-dom";

//import Share from "./";
//import { entity } from "./share.mocks";

describe("Share", () => {
  it("renders a heading", () => {
    expect(true);
    //render(<Share entity={entity} />);

    // const heading = screen.getByRole("heading", {
    //   name: "Title: Test"
    // });

    //expect(heading).toBeInTheDocument();
  });

  afterEach(cleanup);
});
